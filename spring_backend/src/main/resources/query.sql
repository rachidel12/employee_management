drop table if exists role
drop table if exists user_roles
create table role (id bigint not null auto_increment, description varchar(255), name varchar(255), primary key (id)) engine=MyISAM
create table user_roles (user_id bigint not null, role_id bigint not null, primary key (user_id, role_id)) engine=MyISAM
alter table user_roles add constraint FKrhfovtciq1l558cw6udg0h0d3 foreign key (role_id) references role (id)
alter table user_roles add constraint FK55itppkw3i07do3h7qoclqd4k foreign key (user_id) references user (id)

INSERT INTO role (id, description, name) VALUES (4, 'User role', 'USER');
INSERT INTO role (id, description, name) VALUES (5, 'Admin role', 'ADMIN');

INSERT INTO user_roles (user_id, role_id) VALUES (1, 4);
INSERT INTO user_roles (user_id, role_id) VALUES (2, 5);

INSERT INTO `products` (`id`, `categorie`, `image`, `name`, `price`, `quantity`) VALUES ('1', 'électroniques', 'https://uno.ma/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/a/p/apple-airpods-3-gen-uno-maroc3.jpeg', 'airpods', '1000', '55');