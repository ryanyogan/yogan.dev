CREATE TABLE `image` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`image_url` text,
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `image_id` PRIMARY KEY(`id`)
);
