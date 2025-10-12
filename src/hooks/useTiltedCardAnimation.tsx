import type { SpringOptions } from 'motion';
import { useRef, useCallback } from 'react';
import { useMotionValue, useSpring } from 'motion/react';

// Opções que o hook pode receber
interface UseTiltedCardAnimationOptions {
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

/**
 * Hook customizado para gerenciar a lógica de animação de um card interativo.
 * Encapsula o rastreamento do mouse, a física da animação e os manipuladores de eventos.
 * @param ref - A referência do elemento DOM que servirá como área de interação.
 * @param options - Configurações para a animação.
 */
export function useTiltedCardAnimation(
  ref: React.RefObject<HTMLElement>,
  options: UseTiltedCardAnimationOptions = {}
) {
  const { rotateAmplitude = 8, scaleOnHover = 1.1 } = options;

  // Motion values para manipulação direta do DOM, evitando re-renderizações
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });

  // Usar useRef para 'lastY' previne re-renderizações e a recriação do callback
  const lastY = useRef(0);

  const handleMouse = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
      const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

      rotateX.set(rotationX);
      rotateY.set(rotationY);

      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);

      const velocityY = offsetY - lastY.current;
      rotateFigcaption.set(-velocityY * 0.6);
      lastY.current = offsetY; // Atualiza a ref sem causar re-render
    },
    // As dependências agora são estáveis, o callback é criado apenas uma vez.
    [rotateAmplitude, rotateX, rotateY, x, y, rotateFigcaption, ref]
  );

  const handleMouseEnter = useCallback(() => {
    scale.set(scaleOnHover);
    opacity.set(1);
  }, [scale, scaleOnHover, opacity]);

  const handleMouseLeave = useCallback(() => {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
    lastY.current = 0;
  }, [opacity, scale, rotateX, rotateY, rotateFigcaption]);

  // Retorna os valores de animação e os manipuladores de evento
  return {
    animationStyles: {
      card: { rotateX, rotateY, scale },
      tooltip: { x, y, opacity, rotate: rotateFigcaption }
    },
    handlers: {
      onMouseMove: handleMouse,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }
  };
}