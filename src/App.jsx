import { useState } from 'react';
import { Box, Button, Heading, VStack, Container, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// --- IMPORTS DE IMÁGENES ---
import gatoTriste from './assets/gato-triste.jpg';
import happyCat from './assets/happy-cat.gif';
import roseCat from './assets/rose-cat.jpg';
import loveCat from './assets/love-cat.jpg';

// --- COMPONENTE DEL CORAZÓN VOLADOR ---
const CorazonVolador = ({ delay }) => {
  const randomX = Math.random() * 90;
  const hearts = ['💖', '💗', '🌸', '💕'];
  const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${randomX}%`,
        bottom: '-50px',
        fontSize: '24px',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      animate={{
        y: [0, -800],
        opacity: [0, 0.7, 0],
        scale: [0.5, 1, 0.5],
        rotate: [0, 45, -45, 0]
      }}
      transition={{
        duration: Math.random() * 5 + 10,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
    >
      {randomHeart}
    </motion.div>
  );
};

// --- APP PRINCIPAL ---
function App() {
  const [step, setStep] = useState(0); 
  const cantidadCorazones = Array.from({ length: 30 });

  return (
    <Box 
      w="100vw" 
      h="100vh" 
      bg="pink.100" 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      position="relative"
      overflow="hidden" 
      fontFamily="'Quicksand', sans-serif" 
    >
      {/* Fondo de corazones */}
      {cantidadCorazones.map((_, index) => (
        <CorazonVolador key={index} delay={index * 0.5} />
      ))}

      {/* Contenedor de la tarjeta blanca */}
      <Container centerContent position="relative" zIndex={10}>
        <VStack 
          spacing={6} 
          bg="whiteAlpha.600" 
          p={8} 
          rounded="3xl" 
          shadow="2xl" 
          backdropFilter="blur(10px)" 
          border="2px solid" 
          borderColor="pink.200"
          as={motion.div}
          key={step}
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          textAlign="center"
          maxWidth="90%" 
        >
          
          {/* --- PASO 0: INICIO --- */}
          {step === 0 && (
            <>
              <Heading as="h1" size="xl" color="pink.700" fontWeight="700">
                ¿Pero chí me quieres o todo era parte de un plan malévolo? 😿
              </Heading>
              <Box display="flex" gap={6} mt={4}>
                <Button colorScheme="pink" size="lg" rounded="full" shadow="md" onClick={() => setStep(1)} _hover={{ transform: 'scale(1.1)', bg: 'pink.400' }}>Chí ❤️</Button>
                <Button colorScheme="gray" variant="outline" size="lg" rounded="full" border="2px" borderColor="pink.300" color="pink.500" bg="white" onClick={() => setStep(2)} _hover={{ bg: 'pink.50', transform: 'scale(1.1)' }}>No 💔</Button>
              </Box>
            </>
          )}

          {/* --- PASO 1: ¿DE VERDAD? --- */}
          {step === 1 && (
            <>
              <Heading as="h1" size="2xl" color="pink.600" fontWeight="700">¿¿¿De verdad??? 😲</Heading>
              <Box display="flex" gap={6} mt={4}>
                <Button colorScheme="pink" size="lg" rounded="full" shadow="lg" onClick={() => setStep(3)} _hover={{ transform: 'scale(1.1)', bg: 'pink.400' }}>Chí!!! 🥰</Button>
                <Button colorScheme="purple" variant="outline" size="lg" rounded="full" border="2px" bg="white" borderColor="purple.300" color="purple.500" onClick={() => setStep(2)} _hover={{ bg: 'purple.50', transform: 'scale(1.1)' }}>No hehe 😈</Button>
              </Box>
            </>
          )}

          {/* --- PASO 2: GATITO TRISTE --- */}
          {step === 2 && (
            <>
              <Image src={gatoTriste} alt="Gato triste" boxSize="180px" objectFit="cover" borderRadius="full" border="4px solid white" shadow="lg" />
              <Heading size="lg" color="pink.800">Achí estoy ahorita... 💔</Heading>
              <Button colorScheme="teal" size="lg" rounded="full" shadow="md" onClick={() => setStep(0)} _hover={{ transform: 'scale(1.1)' }}>¿Era broma? 🥺</Button>
            </>
          )}

          {/* --- PASO 3: HAPPY CAT --- */}
          {step === 3 && (
            <>
              <Image src={happyCat} alt="Happy Cat" boxSize="200px" borderRadius="full" border="4px solid white" shadow="lg" />
              <Heading size="xl" color="pink.500">¡Chíii! Lo sabía!!! 🎉</Heading>
              <Button colorScheme="pink" size="lg" rounded="full" shadow="lg" _hover={{ transform: 'scale(1.1)', bg: 'pink.400' }} onClick={() => setStep(4)}>Entonces... 👉👈</Button>
            </>
          )}

          {/* --- PASO 4: SAN VALENTÍN --- */}
          {step === 4 && (
            <>
              <Image src={roseCat} alt="Rose Cat" boxSize="220px" objectFit="cover" borderRadius="full" border="5px solid pink" shadow="xl" />
              <Heading size="xl" color="red.500" fontWeight="800">¿Quieres ser mi San Valentín? 🌹</Heading>
              <Button colorScheme="red" size="lg" height="70px" width="200px" fontSize="2xl" rounded="full" shadow="xl" _hover={{ transform: 'scale(1.1)', bg: 'red.400' }} onClick={() => setStep(5)}>
                Chí ❤️
              </Button>
            </>
          )}

          {/* --- PASO 5: FINAL DEFINITIVO --- */}
          {step === 5 && (
            <>
              <Image 
                src={loveCat} 
                alt="Love Cat" 
                boxSize="250px" 
                objectFit="cover"
                borderRadius="full" 
                border="6px solid #ff69b4" 
                shadow="2xl"
                mb={4}
              />
              <Heading size="xl" color="pink.600" fontWeight="900" lineHeight="1.2">
                Entonces el sábado nos vemos, princhecha ❤️
              </Heading>
              <Text fontSize="2xl" color="red.500" fontWeight="bold" mt={4}>
                Te quierooooooooo ❤️❤️❤️❤️❤️❤️❤️❤️❤️
              </Text>
            </>
          )}

        </VStack>
      </Container>

      {/* BOTÓN FANTASMA DE REINICIO (FUERA DE LA TARJETA) */}
      {step === 5 && (
        <Button
          position="absolute"
          bottom="20px"
          right="20px"
          zIndex={20} // Nos aseguramos de que esté por encima de todo
          size="sm"
          variant="ghost" 
          colorScheme="pink"
          color="pink.500"
          opacity={0.3} // Muy sutil
          _hover={{ opacity: 1, bg: 'whiteAlpha.500' }}
          onClick={() => setStep(0)}
        >
          ↺
        </Button>
      )}

    </Box>
  );
}

export default App;