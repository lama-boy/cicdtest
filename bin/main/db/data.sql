insert into user_tb(userid,password,fullname,usertype,created_at)
values('길동','1234','고길동', 'admin',now());

insert into user_tb(userid,password,fullname,usertype,created_at)
values('둘리','1234','아기공룡','user',now());

insert into user_tb(userid,password,fullname,usertype,created_at)
values('이콜','1234','마이콜','user',now());

insert into menu_tb(menu_name, view_name,parent_menu, menu_path, created_at)
values('게시판','home', 0, '/board/',now());

insert into menu_tb(menu_name, view_name, parent_menu, menu_path,created_at)
values('메뉴2','menu2', 0, '', now());

insert into menu_tb(menu_name, view_name, parent_menu, menu_path,created_at)
values('메뉴3','menu3', 0,'', now());

insert into menu_tb(menu_name, view_name, parent_menu, menu_path,created_at)
values('메뉴4','menu4', 0,'', now());

insert into menu_tb(menu_name, view_name, parent_menu, menu_path,created_at)
values('공지','notice', 1,'/board/list/',now());

insert into menu_tb(menu_name, view_name,parent_menu,menu_path,created_at)
values('이벤트','event', 1,'/board/list/', now());

insert into menu_tb(menu_name, view_name, parent_menu,menu_path,created_at)
values('자유게시판','common', 1,'/board/list/', now());

insert into board_tb(menu_id, writer, title, contents, created_at)
values (7,'길동','test1','test1입니다.',now());

insert into board_tb(menu_id, writer, title, contents, created_at)
values (7,'이콜','test2','test2입니다.',now());

insert into board_tb(menu_id, writer, title, contents, created_at)
values (7,'이콜','test3','test3입니다.',now());

insert into board_tb(menu_id, writer, title, contents, created_at)
values (7,'둘리','test4','test4입니다.',now());

insert into board_tb(menu_id, writer, title, contents, created_at)
values (7,'둘리','test5','test5입니다.',now());

insert into board_tb(menu_id, writer, title, contents, created_at)
values (7,'길동','test6','test6입니다.',now());


insert into comment_tb(board_idx, writer, contents, created_at)
values (1,'길동','testComment 정말 유익한 정보에요!',now());



