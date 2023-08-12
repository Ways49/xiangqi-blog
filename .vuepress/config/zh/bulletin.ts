export const bulletin = {
  title: '网站公告',
  body: [
    {
      type: 'title',
      content: '欢迎加入微信群',
      style: 'text-align: center;'
    },
    {
      type: 'text',
      content: `<img src="https://ways49.github.io/xiangqi-blog/wx-group.png" />`,
      style: 'margin: 0 auto;'
    },
    {
      type: 'hr',
    },
    {
      type: 'buttongroup',
      children: [
        {
          text: '打赏',
          link: '/xiangqi-blog/docs/other/donate.html'
        }
      ]
    }
  ]
}