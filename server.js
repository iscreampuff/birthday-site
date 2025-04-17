const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoint to get the positive traits
app.get('/api/traits', (req, res) => {
  const traits = [
    "善良", "可爱", "体贴", "勤劳", "有同理心",
    "有耐心", "诚实", "值得信赖", "忠诚", "温柔",
    "关心他人", "愿意倾听", "乐于助人", "懂得包容", "小妹妹",
    "乐观", "宽容", "富有爱心", "有责任感", "脾气好",
    "细心", "善解人意", "富有同情心", "乐于分享", "喜欢鼓励别人",
    "有正能量", "支持朋友", "可靠", "不自私", "会照顾别人",
    "才女", "坦率", "言而有信", "为朋友着想", "有幽默感",
    "温暖", "真诚", "善于安慰别人", "尊重别人", "很会体谅人",
    "不轻易发脾气", "善于倾听", "充满耐性", "唱得很好听", "心胸开阔",
    "努力", "客气", "与人为善", "谦虚", "善于沟通",
    "做沙拉很好吃", "愿意付出", "喜欢笑", "很有礼貌", "有教养",
    "不错哈哈", "心地善良", "说汉语好", "不批评别人", "给人安全感",
    "温和", "不随便生气", "体谅他人辛苦", "眼里有别人", "聪明",
    "随和", "自信", "很好的老师", "不求回报", "能体会他人情绪",
    "喜欢帮助弱小", "很好的学生", "愿意等别人", "给予空间", "耿直",
    "肯倾听建议", "很贴心", "乐于学习", "太酷了", "不会看不起人",
    "尊重不同意见", "喜欢欣赏风景", "总能发现别人的优点", "友好", "善于合作",
    "踏实", "很现实", "还很年轻", "喜欢和谐", "喜欢拍视频",
    "浪漫哈哈", "忙重要的事情", "有时很放松", "冷静", "喜欢包容不同",
    "开朗", "有时有点紧张", "愿意主动关心别人", "兴奋", "永远站在朋友身边"
  ];
  res.json({ traits });
});

// All other requests return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
