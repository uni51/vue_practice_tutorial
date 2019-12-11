new Vue({
  el: '#app',
  data: {
    // 表示するパネル（インデックス番号）
    id: 0,
    // 表示パネルを配列として
    panels: [
        'WINGSプロジェクトは、ライター山田祥寛が代表を務める執筆コミュニティです。2005年5月、「有限会社 WINGSプロジェクト」として法人化を果たしたのを機に、ますます質の高い情報を読者の方々にお届けしてまいります。',
        '山田祥寛著作の書籍に関するFAQ情報、書籍訂正情報の総覧です（書籍個別ページからご提供しているページと同一の内容です）。Q＆A掲示板をご使用の前に、必ず本ページの内容をご確認ください。',
        '環境設定については、ページ上部「サーバサイド環境構築設定」にて最新の情報をご提供しております。ご質問の前に、こちらもあわせて参照いただきますよう、ご協力をお願いいたします。'
    ],
  },
  methods: {
    // クリック時にid値を0〜2で変化
    onclick: function() {
      this.id = (this.id + 1) % this.panels.length;
    }
  }
});