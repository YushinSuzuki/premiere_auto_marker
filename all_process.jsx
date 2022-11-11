// ＊　ここに　プロジェクト名を入れる
var projectName = "MarkAll";
// ＊　ここに　実行する日時などバージョン名を入れる
var markerComment = 'cut_1111';
// ＊　マーカー色を1〜5で設定
var markerIndex = 1;
// ＊　ここに　イン データ入力
var inTime = new Array('00:00:00:01','00:01:08:01','00:02:55:01','00:06:26:01','00:09:43:01','00:12:07:01','00:15:00:01','00:16:41:01','00:18:25:01','00:19:07:01','00:23:39:01','00:26:35:01','00:34:00:01','00:36:36:01','00:39:49:01','00:40:38:01','00:45:37:01','00:52:27:01','00:56:16:01','00:59:58:01','01:02:27:01','01:03:30:01','01:11:37:01','01:18:03:01','01:35:28:01','01:40:40:01','01:45:58:01','01:50:23:01','02:00:47:01','02:03:40:01','02:08:44:01','02:14:05:01','02:17:49:01','02:18:42:01','02:20:26:01','02:24:41:01','02:34:09:01','02:36:46:01','02:39:09:01','02:48:46:01','02:56:21:01','03:11:01:01','03:13:39:01','03:14:58:01');
// ＊　ここに　アウトデータ入力
var outTime = new Array('00:00:47:01','00:01:16:01','00:04:19:01','00:07:26:01','00:10:46:01','00:13:51:01','00:16:30:01','00:18:00:01','00:18:33:01','00:22:45:01','00:25:41:01','00:31:19:01','00:36:05:01','00:38:16:01','00:40:10:01','00:43:39:01','00:46:57:01','00:56:10:01','00:57:40:01','01:01:49:01','01:02:50:01','01:11:07:01','01:17:58:01','01:21:03:01','01:38:50:01','01:44:17:01','01:48:17:01','01:57:43:01','02:02:16:01','02:07:58:01','02:09:38:01','02:17:35:01','02:18:28:01','02:19:59:01','02:21:25:01','02:30:24:01','02:35:15:01','02:37:38:01','02:43:22:01','02:53:54:01','03:10:03:01','03:11:01:01','03:13:39:01','03:14:39:04');

var fps = 29.97 ;

var projectItems = app.project.sequences;
var projectItem;

for (var i=0 ; i < projectItems.length ; i++){
  $.writeln(i + " = " + projectItems[i].name);

  if(projectItems[i].name == projectName){
    projectItem = projectItems[i];
  }
}

if (inTime.length == outTime.length){

    for (var i=0 ; i < inTime.length ; i++){

        var mkIn= (Number(inTime[i].slice(0,2))* 3600 + Number(inTime[i].slice(3,5)) *60 + Number(inTime[i].slice(6,8))) + Number(inTime[i].slice(9,11))/ fps ;
        var mkOut= (Number(outTime[i].slice(0,2))* 3600 + Number(outTime[i].slice(3,5)) *60 + Number(outTime[i].slice(6,8))) + Number(outTime[i].slice(9,11))/ fps ;

        if (app.project.rootItem.children.numItems > 0){

            if (projectItem) {
                $.writeln(projectItem.name);
                var markers = projectItem.markers;
                var markerNameNum = i + 1;

                var seq_marker = markers.createMarker(mkIn);
                seq_marker.name = markerNameNum.toString();
                seq_marker.comments = markerComment;
                seq_marker.setColorByIndex(markerIndex);
                seq_marker.end = mkOut ;

                var out_marker = markers.createMarker(mkOut);
                out_marker.name = markerNameNum.toString();

                //default marker type == comment. To change marker type, call one of these
                // new_marker.setTypeAsChapter();
                // new_marker.setTypeAsWebLink();
                // new_marker.setTypeAsSegmentation();
                // new_marker.setTypeAsComment();
            } else {
                alert("Could not find first projectItem.");
            }
        } else {
          alert("Project is empty.");
        }
    }
} else{
    alert("IN・OUTの総数が不一致")
}
