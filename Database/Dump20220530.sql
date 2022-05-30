-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: projdata
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `accdet`
--

DROP TABLE IF EXISTS `accdet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accdet` (
  `Username` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `ProfessorName` varchar(255) NOT NULL,
  PRIMARY KEY (`ProfessorName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accdet`
--

LOCK TABLES `accdet` WRITE;
/*!40000 ALTER TABLE `accdet` DISABLE KEYS */;
INSERT INTO `accdet` VALUES ('ali.a','quantumrocks','Ali Abd Almisreb'),('kanita.h','kanita1234','Kanita Hadziabdic'),('kanita.h','kanita1234','Kanita Karaduzovic'),('lejla.m','mpass3755!','Lejla Miller'),('tarik.n','namaspass!?124','Tarik Namas'),('zeynep.s','strongpassword!!100','Zeynep Sagir');
/*!40000 ALTER TABLE `accdet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `CourseProfessor` varchar(255) DEFAULT NULL,
  `CourseCode` varchar(255) NOT NULL,
  `CourseName` varchar(255) DEFAULT NULL,
  `RoomNumber` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`CourseCode`),
  KEY `CourseProfessor` (`CourseProfessor`),
  CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`CourseProfessor`) REFERENCES `accdet` (`ProfessorName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES ('Kanita Hadziabdic','CS103','Introduction to Programming','AF1.33'),('Kanita Hadziabdic','CS105','Advanced Programming','AF1.6'),('Tarik Namas','CS303','Digital Design','TBA'),('Kanita Hadziabdic','CS305','Programming Languages','AF1.16'),('Kanita Hadziabdic','CS308','Software Engineering','BF1.23'),('Zeynep Sagir','CS310','Human Computer Interaction','BF2.14'),('Ali Abd Almisreb','CS428','Quantum Computing','AF1.11'),('Kanita Hadziabdic','EE418','Introduction to Machine Learning','AF1.6');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cs105`
--

DROP TABLE IF EXISTS `cs105`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cs105` (
  `StudentName` varchar(255) DEFAULT NULL,
  `StudentID` int DEFAULT NULL,
  `Week1` tinyint(1) DEFAULT NULL,
  `Week2` tinyint(1) DEFAULT NULL,
  `Week3` tinyint(1) DEFAULT NULL,
  `Week4` tinyint(1) DEFAULT NULL,
  `Week5` tinyint(1) DEFAULT NULL,
  `Week6` tinyint(1) DEFAULT NULL,
  `Week7` tinyint(1) DEFAULT NULL,
  `Week8` tinyint(1) DEFAULT NULL,
  `Week9` tinyint(1) DEFAULT NULL,
  `Week10` tinyint(1) DEFAULT NULL,
  `Week11` tinyint(1) DEFAULT NULL,
  `Week12` tinyint(1) DEFAULT NULL,
  `Week13` tinyint(1) DEFAULT NULL,
  `Week14` tinyint(1) DEFAULT NULL,
  `Week15` tinyint(1) DEFAULT NULL,
  KEY `StudentID` (`StudentID`),
  CONSTRAINT `CS105_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `students` (`StudentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cs105`
--

LOCK TABLES `cs105` WRITE;
/*!40000 ALTER TABLE `cs105` DISABLE KEYS */;
INSERT INTO `cs105` VALUES ('Rijad Karihman',190302007,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),('Will Smith',200302375,1,0,1,0,1,0,1,0,1,NULL,NULL,NULL,NULL,NULL,NULL),('Faruk Imamovic',190302086,1,0,0,0,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),('Edin Ziga',190302192,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `cs105` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cs303`
--

DROP TABLE IF EXISTS `cs303`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cs303` (
  `StudentName` varchar(255) DEFAULT NULL,
  `StudentID` int DEFAULT NULL,
  `Week1` tinyint(1) DEFAULT NULL,
  `Week2` tinyint(1) DEFAULT NULL,
  `Week3` tinyint(1) DEFAULT NULL,
  `Week4` tinyint(1) DEFAULT NULL,
  `Week5` tinyint(1) DEFAULT NULL,
  `Week6` tinyint(1) DEFAULT NULL,
  `Week7` tinyint(1) DEFAULT NULL,
  `Week8` tinyint(1) DEFAULT NULL,
  `Week9` tinyint(1) DEFAULT NULL,
  `Week10` tinyint(1) DEFAULT NULL,
  `Week11` tinyint(1) DEFAULT NULL,
  `Week12` tinyint(1) DEFAULT NULL,
  `Week13` tinyint(1) DEFAULT NULL,
  `Week14` tinyint(1) DEFAULT NULL,
  `Week15` tinyint(1) DEFAULT NULL,
  KEY `StudentID` (`StudentID`),
  CONSTRAINT `CS303_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `students` (`StudentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cs303`
--

LOCK TABLES `cs303` WRITE;
/*!40000 ALTER TABLE `cs303` DISABLE KEYS */;
INSERT INTO `cs303` VALUES ('Faruk Imamovic',190302086,1,0,0,0,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),('Edin Ziga',190302192,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),('Lejla Heganovic',180302553,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `cs303` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cs308`
--

DROP TABLE IF EXISTS `cs308`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cs308` (
  `StudentName` varchar(255) DEFAULT NULL,
  `StudentID` int DEFAULT NULL,
  `Week1` tinyint(1) DEFAULT NULL,
  `Week2` tinyint(1) DEFAULT NULL,
  `Week3` tinyint(1) DEFAULT NULL,
  `Week4` tinyint(1) DEFAULT NULL,
  `Week5` tinyint(1) DEFAULT NULL,
  `Week6` tinyint(1) DEFAULT NULL,
  `Week7` tinyint(1) DEFAULT NULL,
  `Week8` tinyint(1) DEFAULT NULL,
  `Week9` tinyint(1) DEFAULT NULL,
  `Week10` tinyint(1) DEFAULT NULL,
  `Week11` tinyint(1) DEFAULT NULL,
  `Week12` tinyint(1) DEFAULT NULL,
  `Week13` tinyint(1) DEFAULT NULL,
  `Week14` tinyint(1) DEFAULT NULL,
  `Week15` tinyint(1) DEFAULT NULL,
  KEY `StudentID` (`StudentID`),
  CONSTRAINT `CS308_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `students` (`StudentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cs308`
--

LOCK TABLES `cs308` WRITE;
/*!40000 ALTER TABLE `cs308` DISABLE KEYS */;
INSERT INTO `cs308` VALUES ('Faruk Imamovic',190302086,1,0,0,0,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),('Edin Ziga',190302192,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),('Nedim Kunovac',190302020,1,0,0,0,0,0,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `cs308` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cs310`
--

DROP TABLE IF EXISTS `cs310`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cs310` (
  `StudentName` varchar(255) DEFAULT NULL,
  `StudentID` int DEFAULT NULL,
  `Week1` tinyint(1) DEFAULT NULL,
  `Week2` tinyint(1) DEFAULT NULL,
  `Week3` tinyint(1) DEFAULT NULL,
  `Week4` tinyint(1) DEFAULT NULL,
  `Week5` tinyint(1) DEFAULT NULL,
  `Week6` tinyint(1) DEFAULT NULL,
  `Week7` tinyint(1) DEFAULT NULL,
  `Week8` tinyint(1) DEFAULT NULL,
  `Week9` tinyint(1) DEFAULT NULL,
  `Week10` tinyint(1) DEFAULT NULL,
  `Week11` tinyint(1) DEFAULT NULL,
  `Week12` tinyint(1) DEFAULT NULL,
  `Week13` tinyint(1) DEFAULT NULL,
  `Week14` tinyint(1) DEFAULT NULL,
  `Week15` tinyint(1) DEFAULT NULL,
  KEY `StudentID` (`StudentID`),
  CONSTRAINT `CS310_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `students` (`StudentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cs310`
--

LOCK TABLES `cs310` WRITE;
/*!40000 ALTER TABLE `cs310` DISABLE KEYS */;
INSERT INTO `cs310` VALUES ('Rijad Karihman',190302007,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),('Will Smith',200302375,1,0,1,0,1,0,1,0,1,NULL,NULL,NULL,NULL,NULL,NULL),('John Doe',210300034,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `cs310` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cs428`
--

DROP TABLE IF EXISTS `cs428`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cs428` (
  `StudentName` varchar(255) DEFAULT NULL,
  `StudentID` int DEFAULT NULL,
  `Week1` tinyint(1) DEFAULT NULL,
  `Week2` tinyint(1) DEFAULT NULL,
  `Week3` tinyint(1) DEFAULT NULL,
  `Week4` tinyint(1) DEFAULT NULL,
  `Week5` tinyint(1) DEFAULT NULL,
  `Week6` tinyint(1) DEFAULT NULL,
  `Week7` tinyint(1) DEFAULT NULL,
  `Week8` tinyint(1) DEFAULT NULL,
  `Week9` tinyint(1) DEFAULT NULL,
  `Week10` tinyint(1) DEFAULT NULL,
  `Week11` tinyint(1) DEFAULT NULL,
  `Week12` tinyint(1) DEFAULT NULL,
  `Week13` tinyint(1) DEFAULT NULL,
  `Week14` tinyint(1) DEFAULT NULL,
  `Week15` tinyint(1) DEFAULT NULL,
  KEY `StudentID` (`StudentID`),
  CONSTRAINT `CS428_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `students` (`StudentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cs428`
--

LOCK TABLES `cs428` WRITE;
/*!40000 ALTER TABLE `cs428` DISABLE KEYS */;
INSERT INTO `cs428` VALUES ('John Doe',210300034,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),('Lejla Heganovic',180302553,1,1,1,1,1,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL),('Kenan Hamzic',170302107,0,0,0,0,0,1,1,1,1,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `cs428` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `StudentID` int NOT NULL,
  `StudentName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`StudentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (170302107,'Kenan Hamzic'),(180302553,'Lejla Heganovic'),(190302007,'Rijad Karihman'),(190302020,'Nedim Kunovac'),(190302033,'Mirza Redzepovic'),(190302086,'Faruk Imamovic'),(190302192,'Edin Ziga'),(200302375,'Will Smith'),(210300034,'John Doe');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-30  9:47:14
