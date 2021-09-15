/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50557
Source Host           : localhost:3306
Source Database       : materiel

Target Server Type    : MYSQL
Target Server Version : 50557
File Encoding         : 65001

Date: 2021-09-03 18:33:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for materiel_level
-- ----------------------------
DROP TABLE IF EXISTS `materiel_level`;
CREATE TABLE `materiel_level` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(128) DEFAULT NULL COMMENT '物料编码',
  `model` varchar(128) DEFAULT NULL COMMENT '物料型号',
  `potting` varchar(128) DEFAULT NULL COMMENT '封装',
  `quantity` int(11) DEFAULT NULL COMMENT '库存',
  `price` varchar(64) DEFAULT NULL COMMENT '价格',
  `brand` varchar(128) DEFAULT NULL COMMENT '品牌',
  `supplier` varchar(512) DEFAULT NULL COMMENT '供应商信息',
  `remarks` varchar(256) DEFAULT NULL COMMENT '备注',
  `photo` varchar(128) DEFAULT NULL COMMENT '图片',
  `factory_model` varchar(128) DEFAULT NULL COMMENT '厂家型号',
  `classify_id` int(11) DEFAULT NULL COMMENT '分类id',
  `note` varchar(256) DEFAULT NULL COMMENT '备注描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=292 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of materiel_level
-- ----------------------------

-- ----------------------------
-- Table structure for materiel_records
-- ----------------------------
DROP TABLE IF EXISTS `materiel_records`;
CREATE TABLE `materiel_records` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(128) DEFAULT NULL COMMENT '商品编码',
  `name` varchar(128) DEFAULT NULL COMMENT '商品名称',
  `model` varchar(128) DEFAULT NULL COMMENT '商品型号',
  `potting` varchar(128) DEFAULT NULL COMMENT '封装',
  `brand` varchar(128) DEFAULT NULL COMMENT '品牌',
  `price` varchar(64) DEFAULT NULL COMMENT '单价',
  `in_num` int(11) DEFAULT NULL COMMENT '入库数量',
  `out_num` int(11) DEFAULT NULL COMMENT '出库数量',
  `quantity` int(11) DEFAULT NULL COMMENT '库存数量',
  `type` int(2) DEFAULT NULL COMMENT '类型：1入库2出库',
  `factory_model` varchar(128) DEFAULT NULL COMMENT '厂家型号',
  `remarks` varchar(256) DEFAULT NULL COMMENT '描述规格',
  `supplier` varchar(512) DEFAULT NULL COMMENT '供应商',
  `order_id` int(11) DEFAULT NULL COMMENT '订单编号',
  `note` varchar(256) DEFAULT NULL COMMENT '备注描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=389 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of materiel_records
-- ----------------------------

-- ----------------------------
-- Table structure for order_records
-- ----------------------------
DROP TABLE IF EXISTS `order_records`;
CREATE TABLE `order_records` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL COMMENT '订单名称',
  `remarks` varchar(256) DEFAULT NULL COMMENT '订单描述',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `in_time` timestamp NULL DEFAULT NULL COMMENT '入库时间',
  `out_time` timestamp NULL DEFAULT NULL COMMENT '出库时间',
  `status` int(2) DEFAULT NULL COMMENT '状态：0创建1完成',
  `type` int(2) DEFAULT NULL COMMENT '类型：1入库2出库',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_records
-- ----------------------------

-- ----------------------------
-- Table structure for t_classify
-- ----------------------------
DROP TABLE IF EXISTS `t_classify`;
CREATE TABLE `t_classify` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL COMMENT '分类名称',
  `remarks` varchar(256) DEFAULT NULL COMMENT '分类描述',
  `group_id` int(11) DEFAULT NULL COMMENT '分组id',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_classify
-- ----------------------------

-- ----------------------------
-- Table structure for t_group
-- ----------------------------
DROP TABLE IF EXISTS `t_group`;
CREATE TABLE `t_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_group
-- ----------------------------

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login_name` varchar(64) DEFAULT NULL COMMENT '登录名称',
  `real_name` varchar(64) DEFAULT NULL COMMENT '真实名称',
  `pass_word` varchar(128) DEFAULT NULL COMMENT '密码',
  `role_id` int(11) DEFAULT NULL COMMENT '担任角色',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'admin', '管理员', 'lueSGJZetyySpUndWjMBEg==', '1');
