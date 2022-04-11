CREATE TABLE IF NOT EXISTS Country (
    id      CHAR(3) NOT NULL,
    name    VARCHAR(60) NOT NULL, 
    CONSTRAINT pk_Country PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Order_Type (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    type VARCHAR(25) NOT NULL,
    CONSTRAINT pk_Order_Type PRIMARY KEY (id)
) AUTO_INCREMENT = 100;

/*
I added created_at column just to know when the Task is created,
if not needed, of course we can remove it
*/
CREATE TABLE IF NOT EXISTS Task (
    uuid                CHAR(24) UNIQUE NOT NULL,
    order_type          INT UNSIGNED NOT NULL,
    country_code        CHAR(3) NOT NULL,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    pu_datetime         TIMESTAMP NULL,
    pu_address          VARCHAR(255),   
    pu_signature_image  TEXT,
    pu_signed_at        TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(),
    CONSTRAINT pk_Task PRIMARY KEY (uuid),
    CONSTRAINT fk_Country_Code FOREIGN KEY (country_code) REFERENCES Country(id),
    CONSTRAINT fk_Order_Type FOREIGN KEY (order_type) REFERENCES Order_Type(id)  
);

CREATE TABLE Task 
(
    uuid        CHAR(24)        UNIQUE NOT NULL,
    pu_address  VARCHAR(255)    NOT NULL,

    CONSTRAINT pk_Task PRIMARY KEY(uuid) 
);