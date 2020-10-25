-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2020 at 08:31 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webslicing_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_category` int(10) NOT NULL,
  `name_category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id_category`, `name_category`) VALUES
(1, 'Drink'),
(2, 'Food');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `invoice` int(255) NOT NULL,
  `cashier` text CHARACTER SET utf8mb4 NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `orders` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `amount` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`invoice`, `cashier`, `date`, `orders`, `amount`) VALUES
(23244, 'mamad', '2020-10-23 08:15:06', 'Espresso,Cappucino', 16500),
(23670, 'udin', '2020-10-23 15:03:19', 'Salmon Truffle Teriyaki', 66000),
(23733, 'mamad', '2020-10-23 08:16:22', 'Cappucino,Black Forest', 60500),
(23913, 'mamad', '2020-10-23 09:31:34', 'Cheese Cake', 23100);

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `level` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `level`) VALUES
(1, 'Cashier'),
(2, 'Admin'),
(3, 'Customer'),
(4, 'Super Admin');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id_menu` int(10) NOT NULL,
  `name` varchar(70) NOT NULL,
  `id_category` int(10) NOT NULL,
  `price` decimal(11,0) NOT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `created_at` timestamp(6) NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id_menu`, `name`, `id_category`, `price`, `picture`, `created_at`, `updated_at`) VALUES
(1, 'Espresso', 1, '10000', 'http://52.205.254.99:8000/images/1597671461141-img_product.png', '2020-07-29 15:33:58.811602', '2020-08-17 14:04:08.545767'),
(2, 'Cofee Latte', 1, '15000', 'http://52.205.254.99:8000/images/1597671915796-img_product.png', '2020-08-01 06:50:58.811602', '2020-08-17 14:04:08.545767'),
(3, 'Cappucino', 1, '5000', 'http://52.205.254.99:8000/images/1597672526600-img_product.png', '2020-07-30 15:03:58.811602', '2020-08-17 14:04:08.545767'),
(4, 'Red Velvet Latte', 1, '33000', 'http://52.205.254.99:8000/images/1597673128239-img_product.png', '2020-08-01 15:50:58.811602', '2020-08-17 14:08:28.000000'),
(5, 'Choco Rhum', 2, '28000', 'http://52.205.254.99:8000/images/1597673493162-img_product.png', '2020-08-01 12:50:58.811602', '2020-08-17 14:30:22.000000'),
(6, 'Black Forest', 2, '30000', 'http://52.205.254.99:8000/images/1597674657497-img_product.png', '2020-08-01 15:46:58.811602', '2020-08-17 14:32:04.000000'),
(7, 'Chicken Katsu Dabu-dabu', 2, '60000', 'http://52.205.254.99:8000/images/1597674782166-img_product.png', '2020-08-01 03:50:58.855000', '2020-08-17 14:34:09.000000'),
(8, 'Salmon Truffle Teriyaki', 2, '60000', 'http://52.205.254.99:8000/images/1597674871730-img_product.png', '2020-08-01 15:50:01.811602', '2020-08-17 14:36:19.000000'),
(9, 'Wiener Schnitzel', 2, '69000', 'http://52.205.254.99:8000/images/1597674966063-img_product.png', '2020-07-30 13:50:58.811602', '2020-08-17 14:37:11.000000'),
(44, 'Bandrek', 1, '6000', 'http://52.205.254.99:8000/images/1603109889817-img_product.jpg', '2020-10-19 12:18:09.837654', '2020-10-19 12:18:09.837654'),
(45, 'Oreo Milkshake', 1, '26000', 'http://52.205.254.99:8000/images/1603110176841-img_product.jpg', '2020-10-19 12:22:56.850646', '2020-10-19 12:22:56.850646'),
(47, 'Cheese Cake', 2, '21000', 'http://52.205.254.99:8000/images/1603110243108-img_product.jpg', '2020-10-19 12:24:03.114579', '2020-10-19 12:24:03.114579'),
(57, 'Sate Padang', 2, '20000', 'http://52.205.254.99:8000/images/1603517578313-picture.jpg', '2020-10-23 12:00:39.888082', '2020-10-23 12:00:39.888082'),
(58, 'Odading', 2, '10000', 'http://52.205.254.99:8000/images/1603519074299-picture.jpg', '2020-10-24 05:57:54.309356', '2020-10-24 05:57:54.309356'),
(59, 'Spaghetti', 2, '29000', 'http://52.205.254.99:8000/images/1603539907620-picture.jpg', '2020-10-24 11:45:07.631567', '2020-10-24 11:45:07.631567');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_level` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `id_level`) VALUES
(1, 'arkademy', '$2b$10$Qy9mqLj3sOYY/U9sfNCJHOjqW4yaEmDEYID8jasZGnHHt/mRyEFli', 1),
(2, 'ahmad', '$2b$10$wTL3bk38x06dbqn3P5hWa.aP/MLeBxVYOYpzNYyD3UYtPRhDPq8bm', 2),
(3, 'zaky', '$2b$10$mMD7OQVma0UUeodO697RUeIEOeCatcR2Rw7UFkNfxlWJbU1iU/.By', 1),
(7, 'demy', '$2b$10$YM5MweEIryH.TjXo1hvWI.Jg3zPjYdg41dNarOHP3LzudQPVaSd8q', 2),
(8, 'demi', '$2b$10$xe0ccPGj1/JpN7.R2coapeSl9f8jpcE9q2GpZDp.KSNO711ve3ina', 2),
(18, 'Ahmad Zaky', '$2b$10$JyAAEv65TdzKeIwHSo/afeaq.kOWW19o.CPnoxunDK7F0xuMkXKzG', 2),
(19, 'Zaky Ahmad', '$2b$10$68yTgmwtxH5vlqy21T27XuIwaqkNnXNzN9PucwAjC2bZ9bdVTCAX.', 1),
(20, 'fajar', '$2b$10$sx3hTdZD9/uuum/zS7DBhu6NJAoR2wYSJVNOiKRCBqXOBRttx0KR6', 1),
(21, 'juned', '$2b$10$i4t/OjgicRWzQF7WzUkq8.N6dF.dQvbk.Spyn7shmaUuJEpikpLz6', 2),
(22, 'mamad', '$2b$10$76ipvHV0kyijUmCZVha5PO39E5PH6xyaXwKqot54Z./OXlhW5LKxK', 1),
(23, 'topik', '$2b$10$2FdGv4o210ObKIlgUfHh7OA4Ko9DrviyEefuucVLRq4OZtiWSHk0m', 1),
(24, 'udin', '$2b$10$o6LTSi6Kg59uA.yF9JKJC.CWfq1D6TnAucWoEuDNLjen62sgGwNde', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`invoice`),
  ADD KEY `id_menu` (`cashier`(768));

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id_menu`),
  ADD KEY `id_category` (`id_category`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_level` (`id_level`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `invoice` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122346;

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id_menu` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_level`) REFERENCES `levels` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
