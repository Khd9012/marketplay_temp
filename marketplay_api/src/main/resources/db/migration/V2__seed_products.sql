INSERT INTO products (slug, title, category, price, rating, summary, accent, image_code)
VALUES
    ('atelier-speaker', 'Atelier Wood Speaker', '테크', 189000, 4.9, '공간 분위기를 바꾸는 원목 블루투스 스피커', '#efe2d2', 'AS'),
    ('linen-table-set', 'Sunday Linen Table Set', '리빙', 74000, 4.8, '브런치 무드를 더하는 린넨 테이블 컬렉션', '#dde7db', 'LS'),
    ('soft-runner', 'Soft Runner Sneakers', '패션', 129000, 4.7, '가벼운 착화감과 미니멀 실루엣의 데일리 스니커즈', '#f1dfd8', 'SR'),
    ('moss-lamp', 'Moss Glow Lamp', '리빙', 96000, 4.9, '따뜻한 빛으로 완성하는 무드 조명', '#e5ebd6', 'ML');

INSERT INTO product_tags (product_id, sort_order, tag_name)
SELECT id, 0, '감성 오디오' FROM products WHERE slug = 'atelier-speaker';
INSERT INTO product_tags (product_id, sort_order, tag_name)
SELECT id, 1, '무료 배송' FROM products WHERE slug = 'atelier-speaker';

INSERT INTO product_tags (product_id, sort_order, tag_name)
SELECT id, 0, '친환경' FROM products WHERE slug = 'linen-table-set';
INSERT INTO product_tags (product_id, sort_order, tag_name)
SELECT id, 1, '기프트 추천' FROM products WHERE slug = 'linen-table-set';

INSERT INTO product_tags (product_id, sort_order, tag_name)
SELECT id, 0, '한정 컬러' FROM products WHERE slug = 'soft-runner';
INSERT INTO product_tags (product_id, sort_order, tag_name)
SELECT id, 1, '사이즈 다양' FROM products WHERE slug = 'soft-runner';

INSERT INTO product_tags (product_id, sort_order, tag_name)
SELECT id, 0, '인기 상품' FROM products WHERE slug = 'moss-lamp';
INSERT INTO product_tags (product_id, sort_order, tag_name)
SELECT id, 1, '야간 무드' FROM products WHERE slug = 'moss-lamp';
