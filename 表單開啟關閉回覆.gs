var form = FormApp.getActiveForm();

//開啟關閉回覆日期時間
var start_time = "2022-07-05 08:00"; 
var end_time = "2022-07-10 17:00";

//開啟回應
function startAcceptResponse() {
    form.setAcceptingResponses(true);
    Logger.log("Your Google Form is opening");
}

//關閉回應
function stopAcceptResponse() {
    form.setAcceptingResponses(false);
    Logger.log("Your Google Form is closing");
}

//自動設定觸發條件
function setTrigger(){
    ScriptApp.newTrigger("startAcceptResponse")
            .timeBased()
            .at((new Date(start_time)))
            .create();

    ScriptApp.newTrigger("stopAcceptResponse")
            .timeBased()
            .at((new Date(end_time)))
            .create();
}
