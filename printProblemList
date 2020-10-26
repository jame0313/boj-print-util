async function bojPrintProblemList(list){
			if(!document.location.pathname.startsWith("/problem/")){
				alert("아무 문제 페이지에서 실행해주세요!");
				return;
			}
			let domParser = new DOMParser();
			let pageBody = document.getElementsByClassName("container content")[0];
			
			if(pageBody.children[2].className==="row"){
				//처음 실행하는 경우, 기존 문제 내용 삭제 및 2단 구성
				document.title = "Baekjoon Online Judge";
				pageBody.children[2].remove();
				pageBody.style.columnCount=2;
			}
			for(let idx of list){
				pageBody.appendChild(domParser.parseFromString(await fetch(idx).then(x=>x.text()),"text/html").getElementsByClassName("container content")[0].children[2]);
			}
			
			//mathjax 적용
			MathJax.Hub.Typeset()
}

//아무 문제 페이지(ex. problem/1003)에서 스크립트 실행해야함
//실행 예시. bojPrintProblemList(["1003"]);
