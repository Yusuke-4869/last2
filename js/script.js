$("#btn").on("click", function () {
    // const randomNum = Math.ceil(Math.random() * 2);
    // const str1 = $("#form").val();
    const inputWord = $("#form").val();
    const keyword = "よねはらそうた";
    let result = "";

    if (inputWord === keyword) {
        result = "Clear!! ※インストールストップしました。部員に報告してください";
    } else {
        result = "失敗...";
    }
    console.log(inputWord);
    $("#result").html(result);
});