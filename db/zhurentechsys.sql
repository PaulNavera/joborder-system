-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2024 at 11:13 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zhurentechsys`
--

-- --------------------------------------------------------

--
-- Table structure for table `charges`
--

CREATE TABLE `charges` (
  `id` int(11) NOT NULL,
  `job_order_id` int(11) NOT NULL,
  `service_charge` int(10) DEFAULT NULL,
  `transportation_charge` int(10) DEFAULT NULL,
  `allowance` int(10) DEFAULT NULL,
  `other_charges` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `charges`
--

INSERT INTO `charges` (`id`, `job_order_id`, `service_charge`, `transportation_charge`, `allowance`, `other_charges`) VALUES
(10, 114, 0, 0, NULL, 0),
(11, 115, 0, 0, NULL, 0),
(12, 116, 0, 0, NULL, 0),
(15, 119, 0, 0, NULL, 0),
(16, 120, 0, 0, NULL, 0),
(17, 121, 0, 0, NULL, 0),
(18, 122, 0, 0, NULL, 0),
(19, 123, 0, 0, NULL, 0),
(20, 124, 0, 0, NULL, 0),
(21, 125, 0, 0, NULL, 0),
(22, 126, 0, 0, NULL, 0),
(23, 127, 0, 0, NULL, 0),
(24, 128, 0, 0, NULL, 0),
(25, 129, 0, 0, NULL, 0),
(26, 130, 0, 0, NULL, 0),
(27, 131, 0, 0, NULL, 0),
(28, 132, 0, 0, NULL, 0),
(29, 133, 0, 0, NULL, 0),
(30, 134, 0, 0, NULL, 0),
(31, 135, 0, 0, NULL, 0),
(32, 136, 0, 0, NULL, 0),
(33, 137, 0, 0, NULL, 0),
(34, 138, 0, 0, NULL, 0),
(35, 139, 0, 0, NULL, 0),
(36, 140, 0, 0, NULL, 0),
(37, 141, 0, 0, NULL, 0),
(38, 142, 0, 0, NULL, 0),
(39, 143, 0, 0, NULL, 0),
(40, 144, 0, 0, NULL, 0),
(41, 145, 0, 0, NULL, 0),
(42, 146, 0, 0, NULL, 0),
(43, 147, 0, 0, NULL, 0),
(44, 148, 0, 0, NULL, 0),
(45, 149, 0, 0, NULL, 0),
(46, 150, 0, 0, NULL, 0),
(47, 151, 0, 0, NULL, 0),
(48, 152, 0, 0, NULL, 0),
(49, 153, 0, 0, NULL, 0),
(50, 154, 0, 0, NULL, 0),
(51, 155, 0, 0, NULL, 0),
(52, 156, 0, 0, NULL, 0),
(53, 157, 0, 0, NULL, 0),
(54, 158, 0, 0, NULL, 0),
(55, 159, 0, 0, NULL, 0),
(56, 160, 0, 0, NULL, 0),
(57, 161, 0, 0, NULL, 0),
(58, 162, 0, 0, NULL, 0),
(59, 163, 0, 0, NULL, 0),
(60, 164, 0, 0, NULL, 0),
(61, 165, 0, 0, NULL, 0),
(62, 166, 0, 0, NULL, 0),
(63, 167, 0, 0, NULL, 0),
(64, 168, 0, 0, NULL, 0),
(65, 169, 0, 0, NULL, 0),
(66, 170, 0, 0, NULL, 0),
(67, 171, 0, 0, NULL, 0),
(68, 172, 0, 0, NULL, 0),
(69, 173, 0, 0, NULL, 0),
(70, 174, 0, 0, NULL, 0),
(71, 175, 0, 0, NULL, 0),
(72, 176, 0, 0, NULL, 0),
(73, 177, 0, 0, NULL, 0),
(74, 178, 0, 0, NULL, 0),
(75, 179, 0, 0, NULL, 0),
(76, 180, 0, 0, NULL, 0),
(77, 181, 0, 0, NULL, 0),
(78, 182, 0, 0, NULL, 0),
(79, 183, 0, 0, NULL, 0),
(84, 188, 0, 0, NULL, 0),
(85, 189, 0, 0, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `job_order_id` int(11) NOT NULL,
  `company` varchar(50) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `contact` varchar(15) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `messenger` varchar(50) DEFAULT NULL,
  `site` varchar(10) DEFAULT NULL,
  `time_in` time DEFAULT NULL,
  `time_out` time DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `finished_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`job_order_id`, `company`, `name`, `address`, `contact`, `email`, `messenger`, `site`, `time_in`, `time_out`, `start_date`, `finished_date`) VALUES
(114, '', 'Tamara Nuez', 'Arimbay Legazpi', '09126175373', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(115, 'Bicol Arts & Signs', 'Ailyn', 'qeqeqweqw', '09382335914', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(116, '', 'Jocelyn Resari', 'Legazpi City', '09064516667', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(119, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(120, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(121, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(122, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(123, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(124, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(125, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(126, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(127, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(128, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(129, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(130, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(131, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(132, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(133, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(134, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(135, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(136, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(137, '', 'Paul Aldrin Navera', 'Bariw Camalig', '09471423232', '', '', 'In-House', '11:50:00', NULL, '2024-06-29', NULL),
(138, '', 'fsdfsdfds', 'fsdfsdf', 'fsffdsfsd', 'fsdfsdf@fsfsd', 'fsfsdfsdfsd', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(139, '', 'fsdfsdfds', 'fsdfsdf', 'fsffdsfsd', 'fsdfsdf@fsfsd', 'fsfsdfsdfsd', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(140, 'gdgdf', 'gdfgdf', 'gdfgdf', 'gdfgdf', 'gdfgdf@fsdfgdf', 'dfgdfgdf', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(141, 'gdgdf', 'gdfgdf', 'gdfgdf', 'gdfgdf', 'gdfgdf@fsdfgdf', 'dfgdfgdf', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(142, '', 'fdgdfgdf', 'gdfgdf', 'gdfgdfg', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(143, '', 'fdgdfgdf', 'gdfgdf', 'gdfgdfg', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(144, '', 'fdgdfgdf', 'gdfgdf', 'gdfgdfg', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(145, '', 'fdgdfgdf', 'gdfgdf', 'gdfgdfg', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(146, '', 'fdgdfgdf', 'gdfgdf', 'gdfgdfg', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(147, '', 'fdgdfgdf', 'gdfgdf', 'gdfgdfg', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(148, 'fsdfsdf', 'fsfsdf', 'fsfsdfsd', 'ffsdfsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(149, 'fsdfsdf', 'fsfsdf', 'fsfsdfsd', 'ffsdfsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(150, 'fsdfsdf', 'fsfsdf', 'fsfsdfsd', 'ffsdfsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(151, 'fsdfsdf', 'fsfsdf', 'fsfsdfsd', 'ffsdfsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(152, 'fsdfsdf', 'fsfsdf', 'fsfsdfsd', 'ffsdfsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(153, 'fsdfsdf', 'fsfsdf', 'fsfsdfsd', 'ffsdfsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(154, 'fsdfsdf', 'fsfsdf', 'fsfsdfsd', 'ffsdfsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(155, 'fsdfsdf', 'fsfsdf', 'fsfsdfsd', 'ffsdfsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(156, 'sdfsdfsd', 'fsdfsd', 'fsfsd', 'fsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(157, 'sdfsdfsd', 'fsdfsd', 'fsfsd', 'fsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(158, 'sdfsdfsd', 'fsdfsd', 'fsfsd', 'fsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(159, 'sdfsdfsd', 'fsdfsd', 'fsfsd', 'fsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(160, 'sdfsdfsd', 'fsdfsd', 'fsfsd', 'fsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(161, 'sdfsdfsd', 'fsdfsd', 'fsfsd', 'fsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(162, 'sdfsdfsd', 'fsdfsd', 'fsfsd', 'fsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(163, 'sdfsdfsd', 'fsdfsd', 'fsfsd', 'fsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(164, 'sdfsdfsd', 'fsdfsd', 'fsfsd', 'fsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(165, 'sdfsdfsd', 'fsdfsd', 'fsfsd', 'fsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(166, '', 'errwe', 'rewrwe', 'rwerew', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(167, '', 'errwe', 'rewrwe', 'rwerew', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(168, '', 'errwe', 'rewrwe', 'rwerew', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(169, '', 'fsdfsd', 'fsdfsd', 'fsdfssdf', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(170, '', 'fsdfds', 'fsdfs', 'fsfsdfs', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(171, '', 'fsdf', 'fsdfsd', 'fsdfsd', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(172, '', 'qweqwe', 'eqwewq', 'ewqeqwe', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(173, 'fsdfsdf', 'fsdfsd', 'fsdfsd', 'fsfsfsd', '', 'fsdfsdf', 'undefined', '13:35:00', NULL, '2024-06-29', NULL),
(174, '', 'fsdfsd', 'fsdf', 'fsfsdf', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(175, '', 'dsada', 'dsada', 'dsadas', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(176, '', 'das', 'dasda', 'dasdas', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(177, '', 'dasds', 'dasdas', 'dasdas', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(178, '', 'dasdas', 'dasdas', 'dasdas', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(179, '', 'das', 'das', 'das', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(180, '', 'Paul Aldrin Navera', 'dasdas', 'dasdasda', 'dasdasd@fdsfsd', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(181, '', 'dasdasd', 'dasdasdas', 'dasdasd', '', '', 'undefined', '00:00:00', NULL, '2024-06-29', NULL),
(182, '', 'dasdasd', 'dasdas', 'dadas', '', '', 'undefined', '00:00:00', NULL, '0000-00-00', NULL),
(183, '', 'Paul ', 'fdsfsdf', 'fsdfsdfsd', '', '', 'undefined', '00:00:00', NULL, '2024-06-29', NULL),
(188, '', 'Reginald De Guzman', 'Daraga', '09123456789', '', '', 'undefined', '13:53:00', NULL, '2024-07-01', NULL),
(189, '', 'Paul Aldrin ', 'Camalig ', '32234', '', '', 'On-Site', '14:01:00', NULL, '2024-07-01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `parts_consumables`
--

CREATE TABLE `parts_consumables` (
  `id` int(11) NOT NULL,
  `job_order_id` int(11) NOT NULL,
  `quantity` int(10) NOT NULL,
  `item` varchar(20) NOT NULL,
  `amount` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `technician`
--

CREATE TABLE `technician` (
  `id` int(11) NOT NULL,
  `job_order_Id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `min-worked` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` int(11) NOT NULL,
  `job_order_id` int(11) NOT NULL,
  `unit` varchar(30) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `model` varchar(30) NOT NULL,
  `serial` varchar(30) DEFAULT NULL,
  `warranty` varchar(50) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `reports_instructions` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `job_order_id`, `unit`, `brand`, `model`, `serial`, `warranty`, `status`, `reports_instructions`) VALUES
(17, 114, 'Laptop', 'HP', '14s-cf0xxxx', '21312312', 'undefined', 'Under Repair', ''),
(18, 115, 'Printer', 'Canon', 'Pixma', '12314234', 'undefined', 'Under Repair', '* no power cable\r\n* no printer cable\r\n'),
(19, 116, 'Printer', 'Brother', 'DCP', 'E34324242342423', 'undefined', 'Under Repair', ''),
(22, 119, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(23, 120, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(24, 121, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(25, 122, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(26, 123, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(27, 124, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(28, 125, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(29, 126, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(30, 127, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(31, 128, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(32, 129, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(33, 130, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(34, 131, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(35, 132, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(36, 133, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(37, 134, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(38, 135, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(39, 136, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(40, 137, 'Desktop', 'ewqeqw', 'DCP-710W', '1231321312', 'Under Warranty', 'Under Repair', ''),
(41, 138, 'fsfsdf', 'fsfsdfsd', 'fsfsdfsd', 'fsdfsdfsd', 'undefined', 'Under Repair', ''),
(42, 139, 'fsfsdf', 'fsfsdfsd', 'fsfsdfsd', 'fsdfsdfsd', 'undefined', 'Under Repair', ''),
(43, 140, 'gdfgdfg', 'gdfgdf', 'gdfgdf', 'gdfgdf', 'undefined', 'Under Repair', ''),
(44, 141, 'gdfgdfg', 'gdfgdf', 'gdfgdf', 'gdfgdf', 'undefined', 'Under Repair', ''),
(45, 142, 'gdfgdfg', 'gdfgdfgdf', 'gdfgdfgdfg', 'gdfgdfgdf', 'undefined', 'Under Repair', ''),
(46, 143, 'gdfgdfg', 'gdfgdfgdf', 'gdfgdfgdfg', 'gdfgdfgdf', 'undefined', 'Under Repair', ''),
(47, 144, 'gdfgdfg', 'gdfgdfgdf', 'gdfgdfgdfg', 'gdfgdfgdf', 'undefined', 'Under Repair', ''),
(48, 145, 'gdfgdfg', 'gdfgdfgdf', 'gdfgdfgdfg', 'gdfgdfgdf', 'undefined', 'Under Repair', ''),
(49, 146, 'gdfgdfg', 'gdfgdfgdf', 'gdfgdfgdfg', 'gdfgdfgdf', 'undefined', 'Under Repair', ''),
(50, 147, 'gdfgdfg', 'gdfgdfgdf', 'gdfgdfgdfg', 'gdfgdfgdf', 'undefined', 'Under Repair', ''),
(51, 148, 'fsdfsdfs', 'fsdfsdf', 'fsdfsdffsdfsd', 'fsdfsdfsf', 'undefined', 'Under Repair', ''),
(52, 149, 'fsdfsdfs', 'fsdfsdf', 'fsdfsdffsdfsd', 'fsdfsdfsf', 'undefined', 'Under Repair', ''),
(53, 150, 'fsdfsdfs', 'fsdfsdf', 'fsdfsdffsdfsd', 'fsdfsdfsf', 'undefined', 'Under Repair', ''),
(54, 151, 'fsdfsdfs', 'fsdfsdf', 'fsdfsdffsdfsd', 'fsdfsdfsf', 'undefined', 'Under Repair', ''),
(55, 152, 'fsdfsdfs', 'fsdfsdf', 'fsdfsdffsdfsd', 'fsdfsdfsf', 'undefined', 'Under Repair', ''),
(56, 153, 'fsdfsdfs', 'fsdfsdf', 'fsdfsdffsdfsd', 'fsdfsdfsf', 'undefined', 'Under Repair', ''),
(57, 154, 'fsdfsdfs', 'fsdfsdf', 'fsdfsdffsdfsd', 'fsdfsdfsf', 'undefined', 'Under Repair', ''),
(58, 155, 'fsdfsdfs', 'fsdfsdf', 'fsdfsdffsdfsd', 'fsdfsdfsf', 'undefined', 'Under Repair', ''),
(59, 156, 'fsdfsdfsd', 'fsdfsdf', 'fsfsdfs', 'fsdfsdfsdf', 'undefined', 'Under Repair', ''),
(60, 157, 'fsdfsdfsd', 'fsdfsdf', 'fsfsdfs', 'fsdfsdfsdf', 'undefined', 'Under Repair', ''),
(61, 158, 'fsdfsdfsd', 'fsdfsdf', 'fsfsdfs', 'fsdfsdfsdf', 'undefined', 'Under Repair', ''),
(62, 159, 'fsdfsdfsd', 'fsdfsdf', 'fsfsdfs', 'fsdfsdfsdf', 'undefined', 'Under Repair', ''),
(63, 160, 'fsdfsdfsd', 'fsdfsdf', 'fsfsdfs', 'fsdfsdfsdf', 'undefined', 'Under Repair', ''),
(64, 161, 'fsdfsdfsd', 'fsdfsdf', 'fsfsdfs', 'fsdfsdfsdf', 'undefined', 'Under Repair', ''),
(65, 162, 'fsdfsdfsd', 'fsdfsdf', 'fsfsdfs', 'fsdfsdfsdf', 'undefined', 'Under Repair', ''),
(66, 163, 'fsdfsdfsd', 'fsdfsdf', 'fsfsdfs', 'fsdfsdfsdf', 'undefined', 'Under Repair', ''),
(67, 164, 'fsdfsdfsd', 'fsdfsdf', 'fsfsdfs', 'fsdfsdfsdf', 'undefined', 'Under Repair', ''),
(68, 165, 'fsdfsdfsd', 'fsdfsdf', 'fsfsdfs', 'fsdfsdfsdf', 'undefined', 'Under Repair', ''),
(69, 166, 'rwerwrw', 'rwerwe', 'rrwere', 'rwerwer', 'undefined', 'Under Repair', ''),
(70, 167, 'rwerwrw', 'rwerwe', 'rrwere', 'rwerwer', 'undefined', 'Under Repair', ''),
(71, 168, 'rwerwrw', 'rwerwe', 'rrwere', 'rwerwer', 'undefined', 'Under Repair', ''),
(72, 169, 'fdsfsf', 'fsdfsd', 'fsfsdf', 'fsfsdf', 'undefined', 'Under Repair', ''),
(73, 170, 'fsdfsd', 'fsfsd', 'fsfsd', 'fsfsfd', 'undefined', 'Under Repair', ''),
(74, 171, 'fdsfsd', 'fsdf', 'fsdfds', 'fsdf', 'undefined', 'Under Repair', ''),
(75, 172, 'eqweqw', 'ewqeq', 'eqwewq', 'eqweqw', 'undefined', 'Under Repair', ''),
(76, 173, 'fsfsd', 'fsdfsdffsd', 'fsdfsdf', 'fsfsdf', 'Under Warranty', 'Under Repair', 'fsdfsdfs'),
(77, 174, 'fsdfsd', 'fsdf', 'fsdfsdfsdf', 'fsdfsdf', 'undefined', 'Under Repair', ''),
(78, 175, 'dasdas', 'dasdas', 'dads', 'dasdsa', 'undefined', 'Under Repair', ''),
(79, 176, 'dasda', 'dasda', 'dasdasd', 'dasdas', 'undefined', 'Under Repair', ''),
(80, 177, 'dasd', 'asdasd', 'dadas', 'dasdas', 'undefined', 'Under Repair', ''),
(81, 178, 'dada', 'dasdas', 'dasdad', 'dasda', 'undefined', 'Under Repair', ''),
(82, 179, 'das', 'dad', 'dad', 'dad', 'undefined', 'Under Repair', ''),
(83, 180, 'dsadas', 'dsadas', 'dasda', 'dasdas', 'undefined', 'Under Repair', ''),
(84, 181, 'dasdas', 'dasdas', 'dasdasd', 'dasdasdas', 'undefined', 'Under Repair', ''),
(85, 182, 'dadas', 'dasdas', 'dasdas', 'dadasdas', 'undefined', 'Under Repair', ''),
(86, 183, 'fsdfsdf', 'fsfsdfsd', 'fsdfsdfs', 'fsdfsdfs', 'undefined', 'Under Repair', ''),
(91, 188, 'Laptop', 'Lenovo', '12345', '123143243', 'Under Warranty', 'Under Repair', ''),
(92, 189, 'Desktop', 'rwerwe', 'rwerwe', 'rwerwer', 'Under Warranty', 'Under Repair', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `charges`
--
ALTER TABLE `charges`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_order_Id` (`job_order_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`job_order_id`);

--
-- Indexes for table `parts_consumables`
--
ALTER TABLE `parts_consumables`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_order_id` (`job_order_id`);

--
-- Indexes for table `technician`
--
ALTER TABLE `technician`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_order_Id` (`job_order_Id`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`),
  ADD KEY `job_order_id` (`job_order_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `charges`
--
ALTER TABLE `charges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `job_order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=190;

--
-- AUTO_INCREMENT for table `parts_consumables`
--
ALTER TABLE `parts_consumables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `technician`
--
ALTER TABLE `technician`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `technician`
--
ALTER TABLE `technician`
  ADD CONSTRAINT `technician_ibfk_1` FOREIGN KEY (`job_order_Id`) REFERENCES `customers` (`job_order_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
