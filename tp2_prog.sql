-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-09-2020 a las 02:45:10
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
(2, 8, 3, 'Este es un comentario del usuario8', '2020-09-27 00:00:00'),
(3, 9, 3, 'Este es un comentario del usuario9', '2020-09-27 00:00:00'),
(4, 10, 3, 'Este es un comentario del usuario10', '2020-09-27 00:00:00'),
(5, 11, 3, 'Este es un comentario del usuario11', '2020-09-27 00:00:00'),
(6, 12, 3, 'Este es un comentario del usuario12', '2020-09-27 00:00:00'),
(7, 13, 3, 'Este es un comentario del usuario13', '2020-09-27 00:00:00'),
(8, 14, 3, 'Este es un comentario del usuario14', '2020-09-27 00:00:00'),
(9, 15, 3, 'Este es un comentario del usuario15', '2020-09-27 00:00:00'),
(10, 16, 3, 'Este es un comentario del usuario16', '2020-09-27 00:00:00'),
(11, 17, 3, 'Este es un comentario del usuario17', '2020-09-27 00:00:00'),
(12, 18, 3, 'Este es un comentario del usuario18', '2020-09-27 00:00:00'),
(13, 19, 3, 'Este es un comentario del usuario19', '2020-09-27 00:00:00'),
(14, 20, 3, 'Este es un comentario del usuario20', '2020-09-27 00:00:00'),
(15, 21, 3, 'Este es un comentario del usuario21', '2020-09-27 00:00:00'),
(16, 22, 3, 'Este es un comentario del usuario22', '2020-09-27 00:00:00'),
(17, 23, 3, 'Este es un comentario del usuario23', '2020-09-27 00:00:00'),
(18, 24, 3, 'Este es un comentario del usuario24', '2020-09-27 00:00:00'),
(19, 25, 3, 'Este es un comentario del usuario25', '2020-09-27 00:00:00'),
(20, 26, 3, 'Este es un comentario del usuario26', '2020-09-27 00:00:00'),
(21, 27, 3, 'Este es un comentario del usuario27', '2020-09-27 00:00:00'),
(22, 28, 3, 'Este es un comentario del usuario28', '2020-09-27 00:00:00'),
(23, 29, 3, 'Este es un comentario del usuario29', '2020-09-27 00:00:00'),
(24, 30, 3, 'Este es un comentario del usuario30', '2020-09-27 00:00:00'),
(25, 31, 3, 'Este es un comentario del usuario31', '2020-09-27 00:00:00'),
(26, 32, 3, 'Este es un comentario del usuario32', '2020-09-27 00:00:00'),
(27, 33, 3, 'Este es un comentario del usuario33', '2020-09-27 00:00:00'),
(28, 34, 3, 'Este es un comentario del usuario34', '2020-09-27 00:00:00'),
(29, 35, 3, 'Este es un comentario del usuario35', '2020-09-27 00:00:00'),
(30, 36, 3, 'Este es un comentario del usuario36', '2020-09-27 00:00:00'),
(31, 37, 3, 'Este es un comentario del usuario37', '2020-09-27 00:00:00'),
(32, 38, 3, 'Este es un comentario del usuario38', '2020-09-27 00:00:00'),
(33, 39, 3, 'Este es un comentario del usuario39', '2020-09-27 00:00:00'),
(34, 40, 3, 'Este es un comentario del usuario40', '2020-09-27 00:00:00'),
(35, 41, 3, 'Este es un comentario del usuario41', '2020-09-27 00:00:00'),
(36, 42, 3, 'Este es un comentario del usuario42', '2020-09-27 00:00:00'),
(37, 43, 3, 'Este es un comentario del usuario43', '2020-09-27 00:00:00'),
(38, 44, 3, 'Este es un comentario del usuario44', '2020-09-27 00:00:00'),
(39, 45, 3, 'Este es un comentario del usuario45', '2020-09-27 00:00:00'),
(40, 46, 3, 'Este es un comentario del usuario46', '2020-09-27 00:00:00'),
(41, 47, 3, 'Este es un comentario del usuario47', '2020-09-27 00:00:00'),
(42, 48, 3, 'Este es un comentario del usuario48', '2020-09-27 00:00:00'),
(43, 49, 3, 'Este es un comentario del usuario49', '2020-09-27 00:00:00'),
(44, 50, 3, 'Este es un comentario del usuario50', '2020-09-27 00:00:00'),
(45, 51, 3, 'Este es un comentario del usuario51', '2020-09-27 00:00:00'),
(46, 52, 3, 'Este es un comentario del usuario52', '2020-09-27 00:00:00'),
(47, 53, 3, 'Este es un comentario del usuario53', '2020-09-27 00:00:00'),
(48, 54, 3, 'Este es un comentario del usuario54', '2020-09-27 00:00:00'),
(49, 55, 3, 'Este es un comentario del usuario55', '2020-09-27 00:00:00'),
(50, 56, 3, 'Este es un comentario del usuario56', '2020-09-27 00:00:00'),
(51, 8, 4, 'Este es un comentario del usuario8', '2020-09-27 00:00:00'),
(52, 9, 4, 'Este es un comentario del usuario9', '2020-09-27 00:00:00'),
(53, 10, 4, 'Este es un comentario del usuario10', '2020-09-27 00:00:00'),
(54, 11, 4, 'Este es un comentario del usuario11', '2020-09-27 00:00:00'),
(55, 12, 4, 'Este es un comentario del usuario12', '2020-09-27 00:00:00'),
(56, 13, 4, 'Este es un comentario del usuario13', '2020-09-27 00:00:00'),
(57, 14, 4, 'Este es un comentario del usuario14', '2020-09-27 00:00:00'),
(58, 15, 4, 'Este es un comentario del usuario15', '2020-09-27 00:00:00'),
(59, 16, 4, 'Este es un comentario del usuario16', '2020-09-27 00:00:00'),
(60, 17, 4, 'Este es un comentario del usuario17', '2020-09-27 00:00:00'),
(61, 18, 4, 'Este es un comentario del usuario18', '2020-09-27 00:00:00'),
(62, 19, 4, 'Este es un comentario del usuario19', '2020-09-27 00:00:00'),
(63, 20, 4, 'Este es un comentario del usuario20', '2020-09-27 00:00:00'),
(64, 21, 4, 'Este es un comentario del usuario21', '2020-09-27 00:00:00'),
(65, 22, 4, 'Este es un comentario del usuario22', '2020-09-27 00:00:00'),
(66, 23, 4, 'Este es un comentario del usuario23', '2020-09-27 00:00:00'),
(67, 24, 4, 'Este es un comentario del usuario24', '2020-09-27 00:00:00'),
(68, 25, 4, 'Este es un comentario del usuario25', '2020-09-27 00:00:00'),
(69, 26, 4, 'Este es un comentario del usuario26', '2020-09-27 00:00:00'),
(70, 27, 4, 'Este es un comentario del usuario27', '2020-09-27 00:00:00'),
(71, 28, 4, 'Este es un comentario del usuario28', '2020-09-27 00:00:00'),
(72, 29, 4, 'Este es un comentario del usuario29', '2020-09-27 00:00:00'),
(73, 30, 4, 'Este es un comentario del usuario30', '2020-09-27 00:00:00'),
(74, 31, 4, 'Este es un comentario del usuario31', '2020-09-27 00:00:00'),
(75, 32, 4, 'Este es un comentario del usuario32', '2020-09-27 00:00:00'),
(76, 33, 4, 'Este es un comentario del usuario33', '2020-09-27 00:00:00'),
(77, 34, 4, 'Este es un comentario del usuario34', '2020-09-27 00:00:00'),
(78, 35, 4, 'Este es un comentario del usuario35', '2020-09-27 00:00:00'),
(79, 36, 4, 'Este es un comentario del usuario36', '2020-09-27 00:00:00'),
(80, 37, 4, 'Este es un comentario del usuario37', '2020-09-27 00:00:00'),
(81, 38, 4, 'Este es un comentario del usuario38', '2020-09-27 00:00:00'),
(82, 39, 4, 'Este es un comentario del usuario39', '2020-09-27 00:00:00'),
(83, 40, 4, 'Este es un comentario del usuario40', '2020-09-27 00:00:00'),
(84, 41, 4, 'Este es un comentario del usuario41', '2020-09-27 00:00:00'),
(85, 42, 4, 'Este es un comentario del usuario42', '2020-09-27 00:00:00'),
(86, 43, 4, 'Este es un comentario del usuario43', '2020-09-27 00:00:00'),
(87, 44, 4, 'Este es un comentario del usuario44', '2020-09-27 00:00:00'),
(88, 45, 4, 'Este es un comentario del usuario45', '2020-09-27 00:00:00'),
(89, 46, 4, 'Este es un comentario del usuario46', '2020-09-27 00:00:00'),
(90, 47, 4, 'Este es un comentario del usuario47', '2020-09-27 00:00:00'),
(91, 48, 4, 'Este es un comentario del usuario48', '2020-09-27 00:00:00'),
(92, 49, 4, 'Este es un comentario del usuario49', '2020-09-27 00:00:00'),
(93, 50, 4, 'Este es un comentario del usuario50', '2020-09-27 00:00:00'),
(94, 51, 4, 'Este es un comentario del usuario51', '2020-09-27 00:00:00'),
(95, 52, 4, 'Este es un comentario del usuario52', '2020-09-27 00:00:00'),
(96, 53, 4, 'Este es un comentario del usuario53', '2020-09-27 00:00:00'),
(97, 54, 4, 'Este es un comentario del usuario54', '2020-09-27 00:00:00'),
(98, 55, 4, 'Este es un comentario del usuario55', '2020-09-27 00:00:00'),
(99, 56, 4, 'Este es un comentario del usuario56', '2020-09-27 00:00:00'),
(100, 8, 5, 'Este es un comentario del usuario8', '2020-09-27 00:00:00'),
(101, 9, 5, 'Este es un comentario del usuario9', '2020-09-27 00:00:00'),
(102, 10, 5, 'Este es un comentario del usuario10', '2020-09-27 00:00:00'),
(103, 11, 5, 'Este es un comentario del usuario11', '2020-09-27 00:00:00'),
(104, 12, 5, 'Este es un comentario del usuario12', '2020-09-27 00:00:00'),
(105, 13, 5, 'Este es un comentario del usuario13', '2020-09-27 00:00:00'),
(106, 14, 5, 'Este es un comentario del usuario14', '2020-09-27 00:00:00'),
(107, 15, 5, 'Este es un comentario del usuario15', '2020-09-27 00:00:00'),
(108, 16, 5, 'Este es un comentario del usuario16', '2020-09-27 00:00:00'),
(109, 17, 5, 'Este es un comentario del usuario17', '2020-09-27 00:00:00'),
(110, 18, 5, 'Este es un comentario del usuario18', '2020-09-27 00:00:00'),
(111, 19, 5, 'Este es un comentario del usuario19', '2020-09-27 00:00:00'),
(112, 20, 5, 'Este es un comentario del usuario20', '2020-09-27 00:00:00'),
(113, 21, 5, 'Este es un comentario del usuario21', '2020-09-27 00:00:00'),
(114, 22, 5, 'Este es un comentario del usuario22', '2020-09-27 00:00:00'),
(115, 23, 5, 'Este es un comentario del usuario23', '2020-09-27 00:00:00'),
(116, 24, 5, 'Este es un comentario del usuario24', '2020-09-27 00:00:00'),
(117, 25, 5, 'Este es un comentario del usuario25', '2020-09-27 00:00:00'),
(118, 26, 5, 'Este es un comentario del usuario26', '2020-09-27 00:00:00'),
(119, 27, 5, 'Este es un comentario del usuario27', '2020-09-27 00:00:00'),
(120, 28, 5, 'Este es un comentario del usuario28', '2020-09-27 00:00:00'),
(121, 29, 5, 'Este es un comentario del usuario29', '2020-09-27 00:00:00'),
(122, 30, 5, 'Este es un comentario del usuario30', '2020-09-27 00:00:00'),
(123, 31, 5, 'Este es un comentario del usuario31', '2020-09-27 00:00:00'),
(124, 32, 5, 'Este es un comentario del usuario32', '2020-09-27 00:00:00'),
(125, 33, 5, 'Este es un comentario del usuario33', '2020-09-27 00:00:00'),
(126, 34, 5, 'Este es un comentario del usuario34', '2020-09-27 00:00:00'),
(127, 35, 5, 'Este es un comentario del usuario35', '2020-09-27 00:00:00'),
(128, 36, 5, 'Este es un comentario del usuario36', '2020-09-27 00:00:00'),
(129, 37, 5, 'Este es un comentario del usuario37', '2020-09-27 00:00:00'),
(130, 38, 5, 'Este es un comentario del usuario38', '2020-09-27 00:00:00'),
(131, 39, 5, 'Este es un comentario del usuario39', '2020-09-27 00:00:00'),
(132, 40, 5, 'Este es un comentario del usuario40', '2020-09-27 00:00:00'),
(133, 41, 5, 'Este es un comentario del usuario41', '2020-09-27 00:00:00'),
(134, 42, 5, 'Este es un comentario del usuario42', '2020-09-27 00:00:00'),
(135, 43, 5, 'Este es un comentario del usuario43', '2020-09-27 00:00:00'),
(136, 44, 5, 'Este es un comentario del usuario44', '2020-09-27 00:00:00'),
(137, 45, 5, 'Este es un comentario del usuario45', '2020-09-27 00:00:00'),
(138, 46, 5, 'Este es un comentario del usuario46', '2020-09-27 00:00:00'),
(139, 47, 5, 'Este es un comentario del usuario47', '2020-09-27 00:00:00'),
(140, 48, 5, 'Este es un comentario del usuario48', '2020-09-27 00:00:00'),
(141, 49, 5, 'Este es un comentario del usuario49', '2020-09-27 00:00:00'),
(142, 50, 5, 'Este es un comentario del usuario50', '2020-09-27 00:00:00'),
(143, 51, 5, 'Este es un comentario del usuario51', '2020-09-27 00:00:00'),
(144, 52, 5, 'Este es un comentario del usuario52', '2020-09-27 00:00:00'),
(145, 53, 5, 'Este es un comentario del usuario53', '2020-09-27 00:00:00'),
(146, 54, 5, 'Este es un comentario del usuario54', '2020-09-27 00:00:00'),
(147, 55, 5, 'Este es un comentario del usuario55', '2020-09-27 00:00:00'),
(148, 56, 5, 'Este es un comentario del usuario56', '2020-09-27 00:00:00'),
(149, 8, 7, 'Este es un comentario del usuario8', '2020-09-27 00:00:00'),
(150, 9, 7, 'Este es un comentario del usuario9', '2020-09-27 00:00:00'),
(151, 10, 7, 'Este es un comentario del usuario10', '2020-09-27 00:00:00'),
(152, 11, 7, 'Este es un comentario del usuario11', '2020-09-27 00:00:00'),
(153, 12, 7, 'Este es un comentario del usuario12', '2020-09-27 00:00:00'),
(154, 13, 7, 'Este es un comentario del usuario13', '2020-09-27 00:00:00'),
(155, 14, 7, 'Este es un comentario del usuario14', '2020-09-27 00:00:00'),
(156, 15, 7, 'Este es un comentario del usuario15', '2020-09-27 00:00:00'),
(157, 16, 7, 'Este es un comentario del usuario16', '2020-09-27 00:00:00'),
(158, 17, 7, 'Este es un comentario del usuario17', '2020-09-27 00:00:00'),
(159, 18, 7, 'Este es un comentario del usuario18', '2020-09-27 00:00:00'),
(160, 19, 7, 'Este es un comentario del usuario19', '2020-09-27 00:00:00'),
(161, 20, 7, 'Este es un comentario del usuario20', '2020-09-27 00:00:00'),
(162, 21, 7, 'Este es un comentario del usuario21', '2020-09-27 00:00:00'),
(163, 22, 7, 'Este es un comentario del usuario22', '2020-09-27 00:00:00'),
(164, 23, 7, 'Este es un comentario del usuario23', '2020-09-27 00:00:00'),
(165, 24, 7, 'Este es un comentario del usuario24', '2020-09-27 00:00:00'),
(166, 25, 7, 'Este es un comentario del usuario25', '2020-09-27 00:00:00'),
(167, 26, 7, 'Este es un comentario del usuario26', '2020-09-27 00:00:00'),
(168, 27, 7, 'Este es un comentario del usuario27', '2020-09-27 00:00:00'),
(169, 28, 7, 'Este es un comentario del usuario28', '2020-09-27 00:00:00'),
(170, 29, 7, 'Este es un comentario del usuario29', '2020-09-27 00:00:00'),
(171, 30, 7, 'Este es un comentario del usuario30', '2020-09-27 00:00:00'),
(172, 31, 7, 'Este es un comentario del usuario31', '2020-09-27 00:00:00'),
(173, 32, 7, 'Este es un comentario del usuario32', '2020-09-27 00:00:00'),
(174, 33, 7, 'Este es un comentario del usuario33', '2020-09-27 00:00:00'),
(175, 34, 7, 'Este es un comentario del usuario34', '2020-09-27 00:00:00'),
(176, 35, 7, 'Este es un comentario del usuario35', '2020-09-27 00:00:00'),
(177, 36, 7, 'Este es un comentario del usuario36', '2020-09-27 00:00:00'),
(178, 37, 7, 'Este es un comentario del usuario37', '2020-09-27 00:00:00'),
(179, 38, 7, 'Este es un comentario del usuario38', '2020-09-27 00:00:00'),
(180, 39, 7, 'Este es un comentario del usuario39', '2020-09-27 00:00:00'),
(181, 40, 7, 'Este es un comentario del usuario40', '2020-09-27 00:00:00'),
(182, 41, 7, 'Este es un comentario del usuario41', '2020-09-27 00:00:00'),
(183, 42, 7, 'Este es un comentario del usuario42', '2020-09-27 00:00:00'),
(184, 43, 7, 'Este es un comentario del usuario43', '2020-09-27 00:00:00'),
(185, 44, 7, 'Este es un comentario del usuario44', '2020-09-27 00:00:00'),
(186, 45, 7, 'Este es un comentario del usuario45', '2020-09-27 00:00:00'),
(187, 46, 7, 'Este es un comentario del usuario46', '2020-09-27 00:00:00'),
(188, 47, 7, 'Este es un comentario del usuario47', '2020-09-27 00:00:00'),
(189, 48, 7, 'Este es un comentario del usuario48', '2020-09-27 00:00:00'),
(190, 49, 7, 'Este es un comentario del usuario49', '2020-09-27 00:00:00'),
(191, 50, 7, 'Este es un comentario del usuario50', '2020-09-27 00:00:00'),
(192, 51, 7, 'Este es un comentario del usuario51', '2020-09-27 00:00:00'),
(193, 52, 7, 'Este es un comentario del usuario52', '2020-09-27 00:00:00'),
(194, 53, 7, 'Este es un comentario del usuario53', '2020-09-27 00:00:00'),
(195, 54, 7, 'Este es un comentario del usuario54', '2020-09-27 00:00:00'),
(196, 55, 7, 'Este es un comentario del usuario55', '2020-09-27 00:00:00'),
(197, 56, 7, 'Este es un comentario del usuario56', '2020-09-27 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posteos`
--

CREATE TABLE `posteos` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `urlImagen` varchar(255) NOT NULL,
  `txtPost` tinytext NOT NULL,
  `fechaCreacion` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posteos`
--

INSERT INTO `posteos` (`id`, `idUsuario`, `urlImagen`, `txtPost`, `fechaCreacion`) VALUES
(8, 3, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 0', '2020-12-29 00:00:00'),
(9, 3, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 1', '2020-12-29 00:00:00'),
(10, 3, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 2', '2020-12-29 00:00:00'),
(11, 3, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 3', '2020-12-29 00:00:00'),
(12, 3, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 4', '2020-12-29 00:00:00'),
(13, 3, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 5', '2020-12-29 00:00:00'),
(14, 3, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 6', '2020-12-29 00:00:00'),
(15, 3, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 7', '2020-12-29 00:00:00'),
(16, 3, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 8', '2020-12-29 00:00:00'),
(17, 3, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 9', '2020-12-29 00:00:00'),
(18, 4, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 0', '2020-12-29 00:00:00'),
(19, 4, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 1', '2020-12-29 00:00:00'),
(20, 4, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 2', '2020-12-29 00:00:00'),
(21, 4, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 3', '2020-12-29 00:00:00'),
(22, 4, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 4', '2020-12-29 00:00:00'),
(23, 4, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 5', '2020-12-29 00:00:00'),
(24, 4, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 6', '2020-12-29 00:00:00'),
(25, 4, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 7', '2020-12-29 00:00:00'),
(26, 4, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 8', '2020-12-29 00:00:00'),
(27, 4, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 9', '2020-12-29 00:00:00'),
(28, 5, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 0', '2020-12-29 00:00:00'),
(29, 5, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 1', '2020-12-29 00:00:00'),
(30, 5, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 2', '2020-12-29 00:00:00'),
(31, 5, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 3', '2020-12-29 00:00:00'),
(32, 5, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 4', '2020-12-29 00:00:00'),
(33, 5, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 5', '2020-12-29 00:00:00'),
(34, 5, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 6', '2020-12-29 00:00:00'),
(35, 5, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 7', '2020-12-29 00:00:00'),
(36, 5, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 8', '2020-12-29 00:00:00'),
(37, 5, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 9', '2020-12-29 00:00:00'),
(38, 7, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 0', '2020-12-29 00:00:00'),
(39, 7, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 1', '2020-12-29 00:00:00'),
(40, 7, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 2', '2020-12-29 00:00:00'),
(41, 7, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 3', '2020-12-29 00:00:00'),
(42, 7, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 4', '2020-12-29 00:00:00'),
(43, 7, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 5', '2020-12-29 00:00:00'),
(44, 7, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 6', '2020-12-29 00:00:00'),
(45, 7, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 7', '2020-12-29 00:00:00'),
(46, 7, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 8', '2020-12-29 00:00:00'),
(47, 7, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 9', '2020-12-29 00:00:00'),
(48, 8, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 0', '2020-12-29 00:00:00'),
(49, 8, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 1', '2020-12-29 00:00:00'),
(50, 8, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 2', '2020-12-29 00:00:00'),
(51, 8, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 3', '2020-12-29 00:00:00'),
(52, 8, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 4', '2020-12-29 00:00:00'),
(53, 8, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 5', '2020-12-29 00:00:00'),
(54, 8, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 6', '2020-12-29 00:00:00'),
(55, 8, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 7', '2020-12-29 00:00:00'),
(56, 8, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 8', '2020-12-29 00:00:00'),
(57, 8, 'www.asdoaosdoasdoasod.com', 'Hola este es un post 9', '2020-12-29 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(1) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellido` varchar(15) NOT NULL,
  `nombreUser` varchar(12) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `mail` varchar(50) NOT NULL,
  `password` varchar(8) NOT NULL,
  `telefono` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `nombreUser`, `fechaNacimiento`, `mail`, `password`, `telefono`) VALUES
(3, 'Cape', 'Valen', 'CapeValen', '2020-09-01', 'qwdqw@asdas@.com', '123', 123123123),
(4, 'luisma', 'lola', 'luismalola', '2020-02-01', 'dsafqw@asdas@.com', '123', 12333323),
(5, 'Lorenzo', 'Martel', 'Enenen', '2020-06-09', 'ewmwerm@qweqwe', 'as12123', 123123123),
(7, 'Aldo', 'Peroti', 'AldoPeroti', '2020-07-09', 'peoel@wedf.com', 'sfsdfsdf', 123123122),
(8, 'Lal', 'lele', 'LELELA', '2019-04-09', 'ememem@hotm.com', '123123', 123121513);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=198;

--
-- AUTO_INCREMENT de la tabla `posteos`
--
ALTER TABLE `posteos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
