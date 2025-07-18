document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const keywordsInput = document.getElementById('keywords');
    const outputArea = document.getElementById('output-area');

    generateBtn.addEventListener('click', () => {
        const keywords = keywordsInput.value.split('，').map(k => k.trim()).filter(k => k);
        if (keywords.length === 0) {
            outputArea.textContent = '请输入至少一个关键词。';
            return;
        }

        const templates = [
            `OMG！姐妹们，我发现了一个超好用的[关键词]！简直是[形容词]神器！`,
            `[关键词]真香！[描述]，再也不用担心[问题]了！`,
            `今天又是被[关键词]惊艳的一天！[感受]，姐妹们快冲！`,
            `私藏好物分享！这个[关键词]真的绝了，[优点]，无限回购！`,
            `[关键词]使用攻略！[小技巧]，让你轻松get[效果]！`,
        ];

        const adjectives = ['绝绝子', 'yyds', '宝藏', '神仙'];
        const problems = ['选择困难症', '手残', '踩雷'];
        const results = ['高级感', '氛围感', '少女肌'];

        const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomProblem = problems[Math.floor(Math.random() * problems.length)];
        const randomResult = results[Math.floor(Math.random() * results.length)];

        let generatedText = randomTemplate.replace(/\[关键词\]/g, keywords.join('、'));
        generatedText = generatedText.replace(/\[形容词\]/g, randomAdjective);
        generatedText = generatedText.replace(/\[问题\]/g, randomProblem);
        generatedText = generatedText.replace(/\[效果\]/g, randomResult);
        generatedText = generatedText.replace(/\[描述\]/g, '性价比超高，颜值也在线');
        generatedText = generatedText.replace(/\[感受\]/g, '体验感直接拉满');
        generatedText = generatedText.replace(/\[优点\]/g, '便宜又好用');
        generatedText = generatedText.replace(/\[小技巧\]/g, '记得搭配xxx一起用');


        outputArea.textContent = generatedText;
    });
});
