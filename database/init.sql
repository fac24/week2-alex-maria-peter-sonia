BEGIN; 

DROP TABLE IF EXISTS users, ice_cream_posts CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  age INTEGER,
  fandom INTEGER
);

CREATE TABLE ice_cream_posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, -- CASCADE means delete the post if the author gets deleted
  base_flavour TEXT,
  topping TEXT,
  comment TEXT
);

INSERT INTO users (username, age, fandom) VALUES
  ('gelatofiend ', 19, 5),
  ('apatheticAlan', 57, 2),
  ('misscream', 28, 4),
  ('pringles_fan', 42, 1),
;

INSERT INTO ice_cream_posts (user_id, base_flavour, topping, comment) VALUES
  (1, 'strawberry', 'sprinkles', 'Give me sprinkles or give me death'),
  (2, 'pistachio','hot fudge', 'pistachio is fine, I guess'),
  (3, 'caramel', 'melted marshmallow', 'Nothing better than a caramel ice cream after a hard day of coding.'),
  (4, 'vanilla', 'none', 'Why are you all talking about ice cream? I came here for the crisps.', )
;

COMMIT;