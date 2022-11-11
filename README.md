# premiere_auto_marker
Auto marking script for Adobe Premiere pro from timecode list.

1. exelでイン点とアウト点のタイムコードのリストを用意する
    '00:00:00:01','00:01:08:01','00:02:55:01','00:06:26:01','00:09:43:01'......
    '00:00:47:01','00:01:16:01','00:04:19:01','00:07:26:01','00:10:46:01'......

<img width="479" alt="Screen Shot 2022-11-11 at 19 07 55" src="https://user-images.githubusercontent.com/62285965/201318027-362709b3-79f8-48f0-b568-d4524c1aafb7.png">


2. all_process.jsx をvscodeで立ち上げてマーカーを作成
    1. マーカーを打ちたいプロジェクト名を入れる
    2. 実行する日時などバージョン名を入れる
    3. マーカー色を1〜5で設定
    4. イン データ入力、アウトデータ入力
    5. 実行 Run - Run without debugging
