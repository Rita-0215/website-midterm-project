// 旅費計算
document.getElementById("calculate").addEventListener("click", function () { // 偵測按鈕是否被點擊 

    // 取得輸入金額
    let hotel = Number(document.getElementById("hotel").value);
    let transport = Number(document.getElementById("transport").value);
    let food = Number(document.getElementById("food").value);
    let shopping = Number(document.getElementById("shopping").value);

    // 計算總金額
    let total = hotel + transport + food + shopping;

    // 顯示計算結果
    document.getElementById("result").textContent = "總金額：" + total + " 元";

});

// 行李清單
document.getElementById("addItem").addEventListener("click", function () {

    // 取得輸入框的內容
    let item = document.getElementById("itemInput").value;

    // 確認有輸入文字
    if (item !== "") {

        // 建立清單項目
        let li = document.createElement("li");

        // 建立勾選框
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // 建立物品名稱
        let span = document.createElement("span");
        span.textContent = item;

        // 勾選後加上刪除線
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
        });

        // 建立刪除按鈕
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "刪除";

        // 點擊後刪除物品
        deleteButton.addEventListener("click", function () {
            li.remove();
        });

        // 將元素加入清單
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        document.getElementById("packingList").appendChild(li);

        // 清空輸入框
        document.getElementById("itemInput").value = "";
    }

});