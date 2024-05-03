CREATE DATABASE  IF NOT EXISTS `tienda` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tienda`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tienda
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito` (
  `idCarrito` int NOT NULL AUTO_INCREMENT,
  `idUsuarioFK` int DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `fechaVenta` datetime DEFAULT NULL,
  PRIMARY KEY (`idCarrito`),
  KEY `idUsuarioCarritoFK_idx` (`idUsuarioFK`),
  CONSTRAINT `idUsuarioCarritoFK` FOREIGN KEY (`idUsuarioFK`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idCategoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contenido_lista`
--

DROP TABLE IF EXISTS `contenido_lista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contenido_lista` (
  `idContenidoLista` int NOT NULL AUTO_INCREMENT,
  `idListaFK` int DEFAULT NULL,
  `idProductoFK` int DEFAULT NULL,
  PRIMARY KEY (`idContenidoLista`),
  KEY `idListaContenidoListaFK_idx` (`idListaFK`),
  KEY `idProductoContenidoListaFK_idx` (`idProductoFK`),
  CONSTRAINT `idListaContenidoListaFK` FOREIGN KEY (`idListaFK`) REFERENCES `lista` (`idLista`),
  CONSTRAINT `idProductoContenidoListaFK` FOREIGN KEY (`idProductoFK`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contenido_lista`
--

LOCK TABLES `contenido_lista` WRITE;
/*!40000 ALTER TABLE `contenido_lista` DISABLE KEYS */;
/*!40000 ALTER TABLE `contenido_lista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_carrito`
--

DROP TABLE IF EXISTS `detalles_carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalles_carrito` (
  `idDetalle` int NOT NULL AUTO_INCREMENT,
  `idCarritoFK` int DEFAULT NULL,
  `idProductoFK` int DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `imagen` blob,
  `precioUnitario` decimal(8,2) DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  PRIMARY KEY (`idDetalle`),
  KEY `idCarritoDetallesCarritoFK_idx` (`idCarritoFK`),
  KEY `idProductoDetallesCarritoFK_idx` (`idProductoFK`),
  CONSTRAINT `idCarritoDetallesCarritoFK` FOREIGN KEY (`idCarritoFK`) REFERENCES `carrito` (`idCarrito`),
  CONSTRAINT `idProductoDetallesCarritoFK` FOREIGN KEY (`idProductoFK`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_carrito`
--

LOCK TABLES `detalles_carrito` WRITE;
/*!40000 ALTER TABLE `detalles_carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalles_carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_venta`
--

DROP TABLE IF EXISTS `detalles_venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalles_venta` (
  `idDetallesVenta` int NOT NULL AUTO_INCREMENT,
  `idVentaFK` int DEFAULT NULL,
  `idProductoFK` int DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `imagen` blob,
  `precioUnitario` decimal(8,2) DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  PRIMARY KEY (`idDetallesVenta`),
  KEY `idVentaDetallesVentaFK_idx` (`idVentaFK`),
  KEY `idProductoDetallesVentasFK_idx` (`idProductoFK`),
  CONSTRAINT `idProductoDetallesVentasFK` FOREIGN KEY (`idProductoFK`) REFERENCES `producto` (`idProducto`),
  CONSTRAINT `idVentaDetallesVentaFK` FOREIGN KEY (`idVentaFK`) REFERENCES `venta` (`idVenta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_venta`
--

LOCK TABLES `detalles_venta` WRITE;
/*!40000 ALTER TABLE `detalles_venta` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalles_venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagen_producto`
--

DROP TABLE IF EXISTS `imagen_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagen_producto` (
  `idImagen` int NOT NULL AUTO_INCREMENT,
  `idProductoFK` int DEFAULT NULL,
  `imagen` blob,
  PRIMARY KEY (`idImagen`),
  KEY `idProductoImagenFK_idx` (`idProductoFK`),
  CONSTRAINT `idProductoImagenFK` FOREIGN KEY (`idProductoFK`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagen_producto`
--

LOCK TABLES `imagen_producto` WRITE;
/*!40000 ALTER TABLE `imagen_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagen_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lista`
--

DROP TABLE IF EXISTS `lista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lista` (
  `idLista` int NOT NULL AUTO_INCREMENT,
  `idUsuarioFK` int DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `imagen` blob,
  `listaPrivada` tinyint(1) DEFAULT NULL,
  `fechaCreacion` datetime DEFAULT NULL,
  `fechaActu` datetime DEFAULT NULL,
  PRIMARY KEY (`idLista`),
  KEY `idUsuarioListaFK_idx` (`idUsuarioFK`),
  CONSTRAINT `idUsuarioListaFK` FOREIGN KEY (`idUsuarioFK`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lista`
--

LOCK TABLES `lista` WRITE;
/*!40000 ALTER TABLE `lista` DISABLE KEYS */;
/*!40000 ALTER TABLE `lista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idProducto` int NOT NULL AUTO_INCREMENT,
  `idUsuarioFK` int DEFAULT NULL,
  `idCategoriaFK` int DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(1024) DEFAULT NULL,
  `precioUnitario` decimal(8,2) DEFAULT NULL,
  `tipoVenta` tinyint(1) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `valoracion` tinyint(1) DEFAULT NULL,
  `productoAprobado` tinyint(1) DEFAULT NULL,
  `fechaCreacion` datetime DEFAULT NULL,
  `fechaActu` datetime DEFAULT NULL,
  PRIMARY KEY (`idProducto`),
  KEY `idUsuarioProductoFK_idx` (`idUsuarioFK`),
  KEY `idCategoriaProductoFK_idx` (`idCategoriaFK`),
  CONSTRAINT `idCategoriaProductoFK` FOREIGN KEY (`idCategoriaFK`) REFERENCES `categoria` (`idCategoria`),
  CONSTRAINT `idUsuarioProductoFK` FOREIGN KEY (`idUsuarioFK`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--


DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nombreUsuario` varchar(45) DEFAULT NULL,
  `contrasenia` varchar(45) DEFAULT NULL,
  `fotoPerfil` blob,
  `nombre` varchar(45) DEFAULT NULL,
  `apellidoP` varchar(45) DEFAULT NULL,
  `apellidoM` varchar(45) DEFAULT NULL,
  `fechaNacim` date DEFAULT NULL,
  `sexo` varchar(45) DEFAULT NULL,
  `fechaReg` datetime DEFAULT NULL,
  `perfilPrivado` tinyint DEFAULT NULL,
  `rol` tinyint DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (20,'luisgoo@aaaa.com','KaliTz','pedo02',NULL,'Luis','Martínez','ajolote',NULL,'1','2024-04-23 04:43:13',0,1),(21,'luisgoo@aaaa.com','KaliTz','sqsqsq',NULL,'Luis','Martínez','ajolote',NULL,'1','2024-04-23 04:59:24',0,1),(22,'luisgoo@aaaa.com','KaliTz','12312',NULL,'Luis11111','Martínez','ajolote',NULL,'1','2024-04-23 16:46:28',0,1),(23,'2222@gmail.com','1221','1212',NULL,'12121','1212','12121',NULL,'1','2024-04-23 19:07:05',0,1),(24,'2222@gmail.com','1221','1212',NULL,'12121','1212','12121',NULL,'1','2024-04-23 19:08:35',0,1),(25,'2222@gmail.com','1221','1212',NULL,'12121','1212','12121',NULL,'1','2024-04-23 19:11:11',0,1),(26,'2222@gmail.com','1221','1212',_binary '[object ArrayBuffer]','12121','1212','12121',NULL,'1','2024-04-23 19:12:22',0,1),(27,'a@a.com','aa','aaaaa',_binary '[object ArrayBuffer]','aa','a','a',NULL,'1','2024-04-23 20:40:50',0,1),(28,'a@a.com','aa','aaaaa',_binary '[object ArrayBuffer]','aa','a','a',NULL,'1','2024-04-23 20:40:51',0,1),(29,'a@a.com','aa','232',_binary '[object ArrayBuffer]','aa','a','a',NULL,'1','2024-04-23 20:41:40',0,1),(30,'a@a.com','aa','232',_binary '[object ArrayBuffer]','aa','a','a',NULL,'1','2024-04-23 20:43:23',0,1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valoracion`
--

DROP TABLE IF EXISTS `valoracion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `valoracion` (
  `idValoracion` int NOT NULL AUTO_INCREMENT,
  `idProductoFK` int DEFAULT NULL,
  `idUsuarioFK` int DEFAULT NULL,
  `comentario` varchar(2048) DEFAULT NULL,
  `valoracion` tinyint(1) DEFAULT NULL,
  `fechaValoracion` datetime DEFAULT NULL,
  PRIMARY KEY (`idValoracion`),
  KEY `idProductoValoracionFK_idx` (`idProductoFK`),
  KEY `idUsuarioValoracionFK_idx` (`idUsuarioFK`),
  CONSTRAINT `idProductoValoracionFK` FOREIGN KEY (`idProductoFK`) REFERENCES `producto` (`idProducto`),
  CONSTRAINT `idUsuarioValoracionFK` FOREIGN KEY (`idUsuarioFK`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valoracion`
--

LOCK TABLES `valoracion` WRITE;
/*!40000 ALTER TABLE `valoracion` DISABLE KEYS */;
/*!40000 ALTER TABLE `valoracion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta` (
  `idVenta` int NOT NULL AUTO_INCREMENT,
  `idUsuarioFK` int DEFAULT NULL,
  `fechaVenta` datetime DEFAULT NULL,
  `total` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`idVenta`),
  KEY `idUsarioVentaFK_idx` (`idUsuarioFK`),
  CONSTRAINT `idUsarioVentaFK` FOREIGN KEY (`idUsuarioFK`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video_producto`
--

DROP TABLE IF EXISTS `video_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video_producto` (
  `idVideo` int NOT NULL AUTO_INCREMENT,
  `idProductoFK` int DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idVideo`),
  KEY `idProductoVideoFK_idx` (`idProductoFK`),
  CONSTRAINT `idProductoVideoFK` FOREIGN KEY (`idProductoFK`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video_producto`
--

LOCK TABLES `video_producto` WRITE;
/*!40000 ALTER TABLE `video_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `video_producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-23 22:55:36
