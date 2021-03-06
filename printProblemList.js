async function bojPrintProblemList(list){
			if(!document.location.pathname.startsWith("/problem/")){
				alert("아무 문제 페이지에서 실행해주세요!");
				return;
			}
			const DP = new DOMParser();
			const pageBody = document.querySelector(".container.content");
			
			if(null !== pageBody.querySelector(".row")){
				//처음 실행하는 경우, 기존 문제 내용 삭제 및 2단 구성
				document.title = "Baekjoon Online Judge";
				pageBody.querySelector(".row").remove();
				pageBody.style.columnCount=2;
			}
			for(const idx of list){
				pageBody.appendChild(DP.parseFromString(await fetch(idx).then(x=>x.text()),"text/html").querySelector(".container.content .row"));
			}
			
			//mathjax 적용
			MathJax.typesetPromise();
}

//아무 문제 페이지(ex. problem/1003)에서 스크립트 실행해야함
//실행 예시. bojPrintProblemList(["1003"]);
