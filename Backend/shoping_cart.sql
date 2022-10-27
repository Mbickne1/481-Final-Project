create schema if not exists shopping_cart;

create table if not exists companies
(
    id           int auto_increment
    primary key,
    vendor_name  varchar(40) null,
    phone_number varchar(40) null,
    address      varchar(30) null,
    state        varchar(30) null,
    zipcode      int         null,
    constraint companies_id_uindex
    unique (id),
    constraint companies_id_uindex_2
    unique (id),
    constraint companies_vendor_name_uindex
    unique (vendor_name)
    );

create table if not exists buying_list
(
    id         int auto_increment
    primary key,
    company_id int          null,
    item_name  varchar(30)  not null,
    item_price int          null,
    item_desc  varchar(200) null,
    constraint buying_list_id_uindex
    unique (id),
    constraint buying_list_item_name_uindex
    unique (item_name),
    constraint buying_list_companies_id_fk
    foreign key (company_id) references companies (id)
    );

create table if not exists customer_list
(
    id               int auto_increment
    primary key,
    username         varchar(30) not null,
    firstname        varchar(30) not null,
    lastname         varchar(30) null,
    email            varchar(30) not null,
    password         varchar(30) not null,
    shipping_address varchar(50) not null,
    state            varchar(20) not null,
    zipcode          int         not null,
    constraint customer_list_email_uindex
    unique (email),
    constraint customer_list_id_uindex
    unique (id),
    constraint customer_list_username_uindex
    unique (username)
    );

create table if not exists stock_quanity
(
    id              int auto_increment
    primary key,
    item_id         int         null,
    item_quantity   int         null,
    expiration_data date        null,
    location        varchar(30) null,
    constraint shelf_items_id_uindex
    unique (id),
    constraint stock_quanity_buying_list_id_fk
    foreign key (item_id) references buying_list (id)
    );

create table if not exists orders_histro
(
    id          int auto_increment
    primary key,
    item_id     int        null,
    quantity    int        null,
    order_date  date       null,
    ispickup    tinyint(1) null,
    customer_id int        null,
    constraint orders_histro_id_uindex
    unique (id),
    constraint orders_histro_customer_list_id_fk
    foreign key (customer_id) references customer_list (id),
    constraint orders_histro_stock_quanity_item_id_fk
    foreign key (id) references stock_quanity (item_id)
    );

create table if not exists user_info
(
    username     varchar(20)          not null
    primary key,
    firstname    varchar(30)          not null,
    lastname     varchar(30)          null,
    password     varchar(30)          not null,
    phone_number varchar(30)          null,
    Address      varchar(30)          null,
    state        varchar(20)          null,
    zipcode      int                  null,
    admin        tinyint(1) default 0 null,
    constraint user_info_username_uindex
    unique (username)
    );

