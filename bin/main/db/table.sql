--- 유저 테이블
create table user_tb(
	id int auto_increment primary key,
	userid varchar(50) not null unique,
	password varchar(30) not null,
	fullname varchar(50) not null,
	usertype varchar(30) not null,
	created_at timestamp not null default now()
);

-- 메뉴 테이블
create table menu_tb(
	id int auto_increment primary key,
	menu_name varchar(50) not null unique,
	view_name varchar(50) not null,
	parent_menu int not null,
	menu_path varchar(50),
	created_at timestamp not null default now()
);


-- 보드 테이블
create table board_tb(
	board_idx int auto_increment primary key,
	menu_id int,
	writer varchar(50) not null,
	title varchar(50),
	contents varchar(200),
	created_at timestamp not null default now()
);

-- 댓글 테이블
create table comment_tb(
	comment_idx int auto_increment primary key,
	board_idx int,
	writer varchar(50) not null,
	contents varchar(200),
	created_at timestamp not null default now()
)