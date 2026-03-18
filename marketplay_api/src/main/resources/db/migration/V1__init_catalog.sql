CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    slug VARCHAR(120) NOT NULL UNIQUE,
    title VARCHAR(200) NOT NULL,
    category VARCHAR(80) NOT NULL,
    price NUMERIC(12, 0) NOT NULL,
    rating NUMERIC(2, 1) NOT NULL,
    summary VARCHAR(500) NOT NULL,
    accent VARCHAR(20) NOT NULL,
    image_code VARCHAR(10) NOT NULL
);

CREATE TABLE product_tags (
    product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    sort_order INT NOT NULL,
    tag_name VARCHAR(80) NOT NULL,
    PRIMARY KEY (product_id, sort_order)
);

CREATE TABLE wishlist_items (
    id BIGSERIAL PRIMARY KEY,
    customer_id VARCHAR(120) NOT NULL,
    product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL,
    CONSTRAINT uk_wishlist_customer_product UNIQUE (customer_id, product_id)
);

CREATE TABLE cart_items (
    id BIGSERIAL PRIMARY KEY,
    customer_id VARCHAR(120) NOT NULL,
    product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    quantity INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    CONSTRAINT uk_cart_customer_product UNIQUE (customer_id, product_id)
);
