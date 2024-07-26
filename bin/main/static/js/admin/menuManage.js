$(document).ready(function() {
	// onclick ----------------------------------------------

	//modal----------------------------------------------------
	// 모달 취소 버튼
	$('#modalCancelBtn').on('click', () => {
		hideModal();
	});

	// 모달 확인 버튼

	$('#modalAddBtn').on('click', () => {
		ajaxConfirm();
	});

	// 모달 바깥 클릭시 취소
	window.addEventListener('click', (e) => {
		if (e.target == document.querySelector('.modal')) {
			hideModal();
		}
	});

});


// function ============================================================
/*
**  menuDelete 메모
**  
**  button 에 onclick 을 해줬을 경우 dom 요소가 실행되기 
**  전 함수가 정의되어 있어야 하기 때문에 document.ready 
**  안에 해당 함수가 들어갈시 해당 함수를 찾지 못하는 문제가 발생한다.   
*/
// 메뉴 삭제
function menuDeleteByMenuId(menuId, type) {
	let formData = new FormData();
	formData.append("id", menuId);
	$.ajax({
		type: 'post',//데이터 전송 타입,
		url: '/menu/deleteMenu',//데이터를 주고받을 파일 주소 입력,
		data: formData,//보내는 데이터,
		contentType: false,
		processData: false,
		success: function(result) {
			console.log(menuId);
			if (type == 0) {
				$('#menuWrapper_' + menuId).remove();
			} else {
				$('#childContents_' + menuId).remove();
			}
			alert('삭제되었습니다.');
		},
		error: function() {
			alert('실패');
		}
	})
}

// parent_menu 와 menuNm 을 통해 삭제
function menuDeleteByMenuName(delEle, parentMenu, menuNm) {
	let formData = new FormData();
	formData.append("parent_menu", parentMenu);
	formData.append("menu_name", menuNm);
	$.ajax({
		type: 'post',//데이터 전송 타입,
		url: '/menu/deleteMenu',//데이터를 주고받을 파일 주소 입력,
		data: formData,//보내는 데이터,
		contentType: false,
		processData: false,
		success: function(result) {
			delEle.remove();
			alert('삭제되었습니다.');
		},
		error: function() {
			alert('실패');
		}
	})
}

/*
** 추가 버튼을 누르면 menuIds 를 받아서 parentMenu 로 사용할 수 있게.
*/
function menuAdd() {
	let menuIds = [];
	$('.menus').each((idx, e) => {
		menuIds.push(e.textContent)
	});
	$('.modal').css('display', 'flex');
}

/*
** 모달을 숨긴다.
*/
function hideModal() {
	console.log($('#parentMenu').val());
	$('.modal').css('display', 'none');
	//option 요소의 첫번째로 select value 를 바꿔줌
	$('#parentMenu').prop('selectedIndex', 0);
	$('#menu_name').val('');
	$('#menu_path').val('');
	$('#view_name').val('');

}

//ajax confirm
function ajaxConfirm() {
	let formData = new FormData();
	formData.append('parent_menu', $('#parentMenu').val());
	formData.append('menu_name', $('#menu_name').val());
	formData.append('menu_path', $('#menu_path').val());
	formData.append('view_name', $('#view_name').val());

	console.log(formData.get('parent_menu'));
	console.log(formData.get('menu_name'));
	if (formData.get('parent_menu') == null || formData.get('menu_name') == null ||
		formData.get('menu_name').trim() == '' || formData.get('menu_path') == null ||
		formData.get('menu_path').trim() == '') {
		alert("값을 입력해주세요");
		return;
	}
	$.ajax({
		type: 'post',//데이터 전송 타입,
		url: '/menu/addMenu',//데이터를 주고받을 파일 주소 입력,
		data: formData,//보내는 데이터,
		contentType: false,
		processData: false,
		success: function(result) {
			console.log($('#parentMenu').val());
			console.log($('#menu_name').val());
			makeMenuContents($('#parentMenu').val(), $('#menu_name').val());
			hideModal();
		},
		error: function() {
			alert('실패');
		}
	})
}

// ajax 성공시 추가된 메뉴를 jsp 에 표시한다.
function makeMenuContents(parentMenu, menuNm) {
	if (parentMenu == 0) {
		let arr = [];
		$('.menuWrapper').each(function(index, element) {
			arr.push($(element).attr('id').slice(-1));
		});
		let maxVal = Math.max(...arr) + 1;
		let menuWrapper = $('<div class="menuWrapper" id = "menuWrapper_' + maxVal + '">');
		let menuContents = $('<div class = "menuContents">');
		let delButton = $('<button style="height:70%;">삭제</button>');
		$('.Wrapper').append(menuWrapper);
		menuWrapper.append(menuContents);
		menuContents.append($('<div>' + menuNm + '<div>'));
		menuContents.append(delButton);
		delButton.on('click', () => menuDeleteByMenuName(menuWrapper, parentMenu, menuNm));
	} else {
		let menuContents = $('<div class="menuContents">');
		console.log($('#menuWrapper_' + parentMenu));
		$('#menuWrapper_' + parentMenu).append(menuContents);
		menuContents.append($('<div style="width:70%">' + menuNm + '</div>'));
		let deleteBtn = $('<button style="height: 70%>">삭제</button>')
		menuContents.append(deleteBtn);
		console.log('makeMenuCont')
		console.log(menuNm);
		deleteBtn.on('click', () => menuDeleteByMenuName(menuContents, parentMenu, menuNm));
	}
}
