/*
 Navicat Premium Data Transfer

 Source Server         : [MYSQL] Local
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : agency_database

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 29/11/2021 04:07:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for apartments
-- ----------------------------
DROP TABLE IF EXISTS `apartments`;
CREATE TABLE `apartments`  (
  `id` bigint NOT NULL,
  `area_of_bath` int NULL DEFAULT NULL,
  `area_of_bed` int NULL DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `no_of_baths` int NULL DEFAULT NULL,
  `no_of_beds` int NULL DEFAULT NULL,
  `price` int NULL DEFAULT NULL,
  `total_area` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of apartments
-- ----------------------------
INSERT INTO `apartments` VALUES (5, 50, 110, 'EXDFGYHUJNHBGVFCDX,JHGF,522486,TRFDE.', 'Apartment A', 4, 4, 5000000, 1500);
INSERT INTO `apartments` VALUES (6, 70, 265, '4168, WSEDRFTGYHJ, HUGYFRD.', 'Apartment B', 6, 5, 9000000, 2550);
INSERT INTO `apartments` VALUES (7, 55, 115, 'UYTRRTYU, 61, YTRDEIUYTRIO UYTRDFCGV.', 'Apartment C', 3, 3, 5250000, 1800);

-- ----------------------------
-- Table structure for hibernate_sequence
-- ----------------------------
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hibernate_sequence
-- ----------------------------
INSERT INTO `hibernate_sequence` VALUES (8);

SET FOREIGN_KEY_CHECKS = 1;
