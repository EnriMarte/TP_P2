-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-11-2020 a las 18:08:46
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp2_prog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `idPost` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `txtComentario` tinytext NOT NULL,
  `fechaComent` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `idPost`, `idUsuario`, `txtComentario`, `fechaComent`) VALUES
(207, 71, 28, 'Me fui a brasilito', '2020-11-12 16:38:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posteos`
--

CREATE TABLE `posteos` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `urlImagen` text NOT NULL,
  `txtPost` tinytext NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posteos`
--

INSERT INTO `posteos` (`id`, `idUsuario`, `urlImagen`, `txtPost`, `fechaCreacion`) VALUES
(71, 28, 'https://www.lugaresconhistoria.com/wp-content/uploads/2017/04/reconstruccion-Ur-e1494532966931.jpeg.webp', 'En egipto', '2020-11-11 20:21:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguidores`
--

CREATE TABLE `seguidores` (
  `id` int(11) NOT NULL,
  `idSeguidor` int(11) NOT NULL,
  `idSeguido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(1) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `apellido` varchar(150) NOT NULL,
  `nombreUser` varchar(120) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `mail` varchar(1000) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `telefono` int(150) NOT NULL,
  `fotoPerfil` text NOT NULL,
  `pregunta` text NOT NULL,
  `respuesta` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `nombreUser`, `fechaNacimiento`, `mail`, `password`, `telefono`, `fotoPerfil`, `pregunta`, `respuesta`) VALUES
(28, 'enrico', 'martella', 'enrimarte', '2020-10-31', 'enrico.09@hotmail.com', '$2a$10$7d09ROAE8fKJd3OvqeZq/OuqYZAoQ0uRlNRSPJMTbnOmzeA2kAKeq', 123412343, 'data:image/jpeg;base64,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', 'nacimiento', 'Carlos'),
(29, 'Luuima', 'Palacio', 'lpuis', '2013-06-04', 'lui@luji.com', '$2a$10$P2u.9UfZgrK2/.QI.cKLvONqPuG2xvO9PF8pXOV2dagQWWrZO/g5.', 123412443, 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg', 'nacimiento', 'chainis');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPost` (`idPost`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `posteos`
--
ALTER TABLE `posteos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `seguidores`
--
ALTER TABLE `seguidores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idSeguido` (`idSeguido`),
  ADD KEY `idSeguidor` (`idSeguidor`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=208;

--
-- AUTO_INCREMENT de la tabla `posteos`
--
ALTER TABLE `posteos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de la tabla `seguidores`
--
ALTER TABLE `seguidores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`idPost`) REFERENCES `posteos` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `posteos`
--
ALTER TABLE `posteos`
  ADD CONSTRAINT `posteos_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `seguidores`
--
ALTER TABLE `seguidores`
  ADD CONSTRAINT `seguidores_ibfk_1` FOREIGN KEY (`idSeguido`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `seguidores_ibfk_2` FOREIGN KEY (`idSeguidor`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
