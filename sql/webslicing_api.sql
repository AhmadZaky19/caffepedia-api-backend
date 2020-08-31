-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2020 at 10:36 PM
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
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_cart` int(10) NOT NULL,
  `id_product` int(10) NOT NULL,
  `quantity` int(100) NOT NULL,
  `total_price` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_category` int(10) NOT NULL,
  `name_category` text NOT NULL
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
  `id_history` int(10) NOT NULL,
  `invoice` varchar(255) NOT NULL,
  `id_product` int(10) NOT NULL,
  `qty` int(20) NOT NULL,
  `total_price` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id_history`, `invoice`, `id_product`, `qty`, `total_price`) VALUES
(1, '12345', 1, 2, 20000),
(2, '12346', 2, 3, 45000),
(3, '12347', 3, 1, 5000),
(4, '12348', 4, 5, 165000),
(5, '12349', 5, 2, 56000),
(6, '12350', 6, 2, 60000),
(7, '12351', 7, 1, 60000),
(8, '12352', 8, 2, 120000),
(9, '12353', 9, 1, 69000);

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `level` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `level`) VALUES
(1, 'Cashier'),
(2, 'Admin'),
(3, 'Supervisor');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` int(10) NOT NULL,
  `name_product` text NOT NULL,
  `id_category` int(10) NOT NULL,
  `price_product` int(20) NOT NULL,
  `img_product` text NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `name_product`, `id_category`, `price_product`, `img_product`, `created_at`, `updated_at`) VALUES
(1, 'Espresso', 1, 10000, 'http://localhost:8000/images/1597671461141-img_product.png', '2020-07-29 15:33:58.811602', '2020-08-17 14:04:08.545767'),
(2, 'Cofee Latte', 1, 15000, 'http://localhost:8000/images/1597671915796-img_product.png', '2020-08-01 06:50:58.811602', '2020-08-17 14:04:08.545767'),
(3, 'Cappucino', 1, 5000, 'http://localhost:8000/images/1597672526600-img_product.png', '2020-07-30 15:03:58.811602', '2020-08-17 14:04:08.545767'),
(4, 'Red Velvet Latte', 1, 33000, 'http://localhost:8000/images/1597673128239-img_product.png', '2020-08-01 15:50:58.811602', '2020-08-17 14:08:28.000000'),
(5, 'Choco Rhum', 2, 28000, 'http://localhost:8000/images/1597673493162-img_product.png', '2020-08-01 12:50:58.811602', '2020-08-17 14:30:22.000000'),
(6, 'Black Forest', 2, 30000, 'http://localhost:8000/images/1597674657497-img_product.png', '2020-08-01 15:46:58.811602', '2020-08-17 14:32:04.000000'),
(7, 'Chicken Katsu Dabu-dabu', 2, 60000, 'http://localhost:8000/images/1597674782166-img_product.png', '2020-08-01 03:50:58.855000', '2020-08-17 14:34:09.000000'),
(8, 'Salmon Truffle Teriyaki', 2, 60000, 'http://localhost:8000/images/1597674871730-img_product.png', '2020-08-01 15:50:01.811602', '2020-08-17 14:36:19.000000'),
(9, 'Wiener Schnitzel', 2, 69000, 'http://localhost:8000/images/1597674966063-img_product.png', '2020-07-30 13:50:58.811602', '2020-08-17 14:37:11.000000');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `id_level`) VALUES
(1, 'arkademy', '$2b$10$Qy9mqLj3sOYY/U9sfNCJHOjqW4yaEmDEYID8jasZGnHHt/mRyEFli', 1),
(2, 'ahmad', '$2b$10$wTL3bk38x06dbqn3P5hWa.aP/MLeBxVYOYpzNYyD3UYtPRhDPq8bm', 2),
(3, 'zaky', '$2b$10$mMD7OQVma0UUeodO697RUeIEOeCatcR2Rw7UFkNfxlWJbU1iU/.By', 3),
(7, 'demy', '$2b$10$YM5MweEIryH.TjXo1hvWI.Jg3zPjYdg41dNarOHP3LzudQPVaSd8q', 2),
(8, 'demi', '$2b$10$xe0ccPGj1/JpN7.R2coapeSl9f8jpcE9q2GpZDp.KSNO711ve3ina', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_cart`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id_history`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `id_category` (`id_category`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id_cart` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id_history` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id_product`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;