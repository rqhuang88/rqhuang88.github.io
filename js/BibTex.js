// JavaScript 函数，用于获取 URL 参数
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function copyToClipboard(contentId) {
    // 获取要复制的内容
    var contentToCopy = document.getElementById(contentId).querySelector('p');
    console.log(contentToCopy)

    // 创建一个临时的textarea元素，将要复制的内容放入其中
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = contentToCopy.textContent;

    // 将textarea添加到文档中
    document.body.appendChild(tempTextArea);

    // 选择textarea中的内容
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); /* 兼容iOS */

    // 尝试执行复制命令
    document.execCommand('copy');

    // 移除临时创建的textarea
    document.body.removeChild(tempTextArea);

    // 在实际应用中，你可能需要提供用户一些反馈，告诉他们内容已被复制
    showMessagePopup();
}

function showMessagePopup() {
    var messagePopup = document.getElementById('messagePopup');
    messagePopup.textContent = 'Copy successful!';

    // 显示消息弹窗
    messagePopup.style.display = 'block';

    // 设置一定时间后自动关闭消息弹窗
    setTimeout(function() {
        messagePopup.style.display = 'none';
    }, 3000); // 3秒后关闭消息弹窗
}

// 获取 id 参数的值
var id = getParameterByName('id');

var contentParagraph = document.getElementById('contentParagraph');
if (id === 'DFR') {
    contentParagraph.textContent = '@article{jiang2023non,\n' +
        '   title={Non-Rigid Shape Registration via Deep Functional Maps Prior},\n' +
        '   author={Jiang, Puhua and Sun, Mingze and Huang, Ruqi},\n' +
        '   journal={Advances in Neural Information Processing Systems},\n' +
        '   volume={36},\n' +
        '   year={2024}\n' +
        '}';
} else if (id === 'ULPCMM') {
    contentParagraph.textContent = '@article{wan2023unsupervised,\n' +
        '  title={Unsupervised learning of pixel clustering in Mueller matrix images for mapping microstructural features in pathological tissues},\n' +
        '  author={Wan, Jiachen and Dong, Yang and Yao, Yue and Xiao, Weijin and Huang, Ruqi and Xue, Jing-Hao and Peng, Ran and Pei, Haojie and Tian, Xuewu and Liao, Ran and others},\n' +
        '  journal={Communications Engineering},\n' +
        '  volume={2},\n' +
        '  number={1},\n' +
        '  pages={88},\n' +
        '  year={2023},\n' +
        '  publisher={Nature Publishing Group UK London}\n' +
        '}';
} else if (id === 'GiganticNVS') {
    contentParagraph.textContent = '@article{wang2023giganticnvs,\n' +
        '  title={GiganticNVS: Gigapixel Large-scale Neural Rendering with Implicit Meta-deformed Manifold},\n' +
        '  author={Wang, Guangyu and Zhang, Jinzhi and Zhang, Kai and Huang, Ruqi and Fang, Lu},\n' +
        '  journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},\n' +
        '  year={2023},\n' +
        '  publisher={IEEE}\n' +
        '}';
} else if (id === 'SSCDFMAP') {
    contentParagraph.textContent = '@inproceedings{sun2023spatially,\n' +
        '  title={Spatially and spectrally consistent deep functional maps},\n' +
        '  author={Sun, Mingze and Mao, Shiwei and Jiang, Puhua and Ovsjanikov, Maks and Huang, Ruqi},\n' +
        '  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},\n' +
        '  pages={14497--14507},\n' +
        '  year={2023}\n' +
        '}';
} else if (id === 'RealGraph') {
    contentParagraph.textContent = '@inproceedings{lin2023realgraph,\n' +
        '  title={RealGraph: A Multiview Dataset for 4D Real-world Context Graph Generation},\n' +
        '  author={Lin, Haozhe and Chen, Zequn and Zhang, Jinzhi and Bai, Bing and Wang, Yu and Huang, Ruqi and Fang, Lu},\n' +
        '  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},\n' +
        '  pages={3758--3768},\n' +
        '  year={2023}\n' +
        '}';
} else if (id === 'GIF') {
    contentParagraph.textContent = '@article{wang2023group,\n' +
        '  title={The Group Interaction Field for Learning and Explaining Pedestrian Anticipation},\n' +
        '  author={Wang, Xueyang and Chen, Xuecheng and Jiang, Puhua and Lin, Haozhe and Yuan, Xiaoyun and Ji, Mengqi and Guo, Yuchen and Huang, Ruqi and Fang, Lu},\n' +
        '  journal={Engineering},\n' +
        '  year={2023},\n' +
        '  publisher={Elsevier}\n' +
        '}';
} else if (id === 'FastP2P') {
    contentParagraph.textContent = 'missing';
} else if (id === 'NIE') {
    contentParagraph.textContent = '@inproceedings{jiang2023neural,\n' +
        '  title={Neural Intrinsic Embedding for Non-rigid Point Cloud Matching},\n' +
        '  author={Jiang, Puhua and Sun, Mingze and Huang, Ruqi},\n' +
        '  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},\n' +
        '  pages={21835--21845},\n' +
        '  year={2023}\n' +
        '}';
} else if (id === 'ONODE') {
    contentParagraph.textContent = '@article{zhao2023optical,\n' +
        '  title={Optical neural ordinary differential equations},\n' +
        '  author={Zhao, Yun and Chen, Hang and Lin, Min and Zhang, Haiou and Yan, Tao and Huang, Ruqi and Lin, Xing and Dai, Qionghai},\n' +
        '  journal={Optics Letters},\n' +
        '  volume={48},\n' +
        '  number={3},\n' +
        '  pages={628--631},\n' +
        '  year={2023},\n' +
        '  publisher={Optica Publishing Group}\n' +
        '}';
} else if (id === 'ElasticMVS') {
    contentParagraph.textContent = '@article{zhang2022elasticmvs,\n' +
        '  title={ElasticMVS: Learning elastic part representation for self-supervised multi-view stereopsis},\n' +
        '  author={Zhang, Jinzhi and Tang, Ruofan and Cao, Zheng and Xiao, Jing and Huang, Ruqi and Fang, Lu},\n' +
        '  journal={Advances in Neural Information Processing Systems},\n' +
        '  volume={35},\n' +
        '  pages={23510--23523},\n' +
        '  year={2022}\n' +
        '}';
} else if (id === 'ParseMVS') {
    contentParagraph.textContent = '@inproceedings{ying2022parsemvs,\n' +
        '  title={ParseMVS: Learning Primitive-aware Surface Representations for Sparse Multi-view Stereopsis},\n' +
        '  author={Ying, Haiyang and Zhang, Jinzhi and Chen, Yuzhe and Cao, Zheng and Xiao, Jing and Huang, Ruqi and Fang, Lu},\n' +
        '  booktitle={Proceedings of the 30th ACM International Conference on Multimedia},\n' +
        '  pages={6113--6124},\n' +
        '  year={2022}\n' +
        '}';
} else if (id === 'CCDC') {
    contentParagraph.textContent = '@inproceedings{zhao2022cross,\n' +
        '  title={Cross-Camera Deep Colorization},\n' +
        '  author={Zhao, Yaping and Zheng, Haitian and Ji, Mengqi and Huang, Ruqi},\n' +
        '  booktitle={CAAI International Conference on Artificial Intelligence},\n' +
        '  pages={3--17},\n' +
        '  year={2022},\n' +
        '  organization={Springer}\n' +
        '}';
} else if (id === 'EFENet') {
    contentParagraph.textContent = '@inproceedings{zhao2021efenet,\n' +
        '  title={Efenet: Reference-based video super-resolution with enhanced flow estimation},\n' +
        '  author={Zhao, Yaping and Ji, Mengqi and Huang, Ruqi and Wang, Bin and Wang, Shengjin},\n' +
        '  booktitle={Artificial Intelligence: First CAAI International Conference, CICAI 2021, Hangzhou, China, June 5--6, 2021, Proceedings, Part I 1},\n' +
        '  pages={371--383},\n' +
        '  year={2021},\n' +
        '  organization={Springer}\n' +
        '}';
} else if (id === 'ConsistentZoomOut') {
    contentParagraph.textContent = '@inproceedings{huang2020consistent,\n' +
        '  title={Consistent zoomout: Efficient spectral map synchronization},\n' +
        '  author={Huang, Ruqi and Ren, Jing and Wonka, Peter and Ovsjanikov, Maks},\n' +
        '  booktitle={Computer Graphics Forum},\n' +
        '  volume={39},\n' +
        '  number={5},\n' +
        '  pages={265--278},\n' +
        '  year={2020},\n' +
        '  organization={Wiley Online Library}\n' +
        '}';
} else if (id === 'OperatorNet') {
    contentParagraph.textContent = '@inproceedings{huang2019operatornet,\n' +
        '  title={Operatornet: Recovering 3d shapes from difference operators},\n' +
        '  author={Huang, Ruqi and Rakotosaona, Marie-Julie and Achlioptas, Panos and Guibas, Leonidas J and Ovsjanikov, Maks},\n' +
        '  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},\n' +
        '  pages={8588--8597},\n' +
        '  year={2019}\n' +
        '}';
} else if (id === 'LimitShape') {
    contentParagraph.textContent = '@inproceedings{huang2019limit,\n' +
        '  title={Limit shapes--a tool for understanding shape differences and variability in 3d model collections},\n' +
        '  author={Huang, Ruqi and Achlioptas, Panos and Guibas, Leonidas and Ovsjanikov, Maks},\n' +
        '  booktitle={Computer Graphics Forum},\n' +
        '  volume={38},\n' +
        '  number={5},\n' +
        '  pages={187--202},\n' +
        '  year={2019},\n' +
        '  organization={Wiley Online Library}\n' +
        '}';
} else if (id === 'AMRSAM') {
    contentParagraph.textContent = '@inproceedings{huang2017adjoint,\n' +
        '  title={Adjoint map representation for shape analysis and matching},\n' +
        '  author={Huang, Ruqi and Ovsjanikov, Maks},\n' +
        '  booktitle={Computer Graphics Forum},\n' +
        '  volume={36},\n' +
        '  number={5},\n' +
        '  pages={151--163},\n' +
        '  year={2017},\n' +
        '  organization={Wiley Online Library}\n' +
        '}';
} else if (id === 'OSFMSDO') {
    contentParagraph.textContent = '@inproceedings{huang2018stability,\n' +
        '  title={On the stability of functional maps and shape difference operators},\n' +
        '  author={Huang, Ruqi and Chazal, Fr{\\\'e}d{\\\'e}ric and Ovsjanikov, Maks},\n' +
        '  booktitle={Computer Graphics Forum},\n' +
        '  volume={37},\n' +
        '  number={1},\n' +
        '  pages={145--158},\n' +
        '  year={2018},\n' +
        '  organization={Wiley Online Library}\n' +
        '}';
} else if (id === 'GHAFSURTG') {
    contentParagraph.textContent = '@article{chazal2015gromov,\n' +
        '  title={Gromov--Hausdorff Approximation of Filamentary Structures Using Reeb-Type Graphs},\n' +
        '  author={Chazal, Fr{\\\'e}d{\\\'e}ric and Huang, Ruqi and Sun, Jian},\n' +
        '  journal={Discrete \\& Computational Geometry},\n' +
        '  volume={3},\n' +
        '  number={53},\n' +
        '  pages={621--649},\n' +
        '  year={2015}\n' +
        '}';
} else if (id === 'OmniSeg3D') {
    contentParagraph.textContent = '@inproceedings{ying2024omniseg3d,\n' +
        '   title={Omniseg3d: Omniversal 3d segmentation via hierarchical contrastive learning},\n' +
        '   author={Ying, Haiyang and Yin, Yixuan and Zhang, Jinzhi and Wang, Fan and Yu, Tao and Huang, Ruqi and Fang, Lu},\n' +
        '   booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},\n' +
        '   pages={20612--20622},\n' +
        '   year={2024}\n' +
        '}';
} else if (id === 'XScale-NVS') {
    contentParagraph.textContent = '@inproceedings{wang2024xscalec,\n' +
        '   title={XScale-NVS: Cross-Scale Novel View Synthesis with Hash Featurized Manifold},\n' +
        '   author={Wang, Guangyu and Zhang, Jinzhi and Wang, Fan and Huang, Ruqi and Fang, Lu},\n' +
        '   booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},\n' +
        '   pages={21029--21039},\n' +
        '   year={2024}\n' +
        '}';
} else if (id === 'Nanowatt') {
    contentParagraph.textContent = '@article{doi:10.1126/sciadv.adn2031,\n' +
        '   author = {Tao Yan  and Tiankuang Zhou  and Yanchen Guo  and Yun Zhao  and Guocheng Shao  and Jiamin Wu  and Ruqi Huang  and Qionghai Dai  and Lu Fang },\n' +
        '   title = {Nanowatt all-optical 3D perception for mobile robotics},\n' +
        '   journal = {Science Advances},\n' +
        '   volume = {10},\n' +
        '   number = {27},\n' +
        '   pages = {eadn2031},\n' +
        '   year = {2024},\n' +
        '   doi = {10.1126/sciadv.adn2031},\n' +
        '   URL = {https://www.science.org/doi/abs/10.1126/sciadv.adn2031},\n' +
        '   eprint = {https://www.science.org/doi/pdf/10.1126/sciadv.adn2031},\n' +
        '}';
} else if (id === 'SRIF') {
    contentParagraph.textContent = '@inproceedings{10.1145/3680528.3687567,\n' +
        '   author = {Sun, Mingze and Guo, Chen and Jiang, Puhua and Mao, Shiwei and Chen, Yurun and Huang, Ruqi},\n' +
        '   title = {SRIF: Semantic Shape Registration Empowered by Diffusion-based Image Morphing and Flow Estimation},\n' +
        '   year = {2024},\n' +
        '   isbn = {9798400711312},\n' +
        '   publisher = {Association for Computing Machinery},\n' +
        '   address = {New York, NY, USA},\n' +
        '   url = {https://doi.org/10.1145/3680528.3687567},\n' +
        '   doi = {10.1145/3680528.3687567},\n' +
        '   booktitle = {SIGGRAPH Asia 2024 Conference Papers},\n' +
        '   articleno = {81},\n' +
        '   numpages = {11},\n' +
        '   keywords = {Shape registration, Image morphing, Continuous normalizing flow.},\n' +
        "   series = {SA '24}\n" +
        '   }';
} else if (id === 'EHOF') {
    contentParagraph.textContent = '@inproceedings{10.2312:pg.20241314,\n' +
        '   booktitle = {Pacific Graphics Conference Papers and Posters},\n' +
        '   editor = {Chen, Renjie and Ritschel, Tobias and Whiting, Emily},\n' +
        '   title = {{Enhancing Human Optical Flow via 3D Spectral Prior}},\n' +
        '   author = {Mao, Shiwei and Sun, Mingze and Huang, Ruqi},\n' +
        '   year = {2024},\n' +
        '   publisher = {The Eurographics Association},\n' +
        '   ISBN = {978-3-03868-250-9},\n' +
        '   DOI = {10.2312/pg.20241314}\n' +
        '   }';
} else if (id === 'EMNN') {
    contentParagraph.textContent = '@article{ShaoZhouYanGuoZhaoHuangFang+2025,\n' +
        '   url = {https://doi.org/10.1515/nanoph-2024-0504},\n' +
        '   title = {Reliable, efficient, and scalable photonic inverse design empowered by physics-inspired deep learning},\n' +
        '   author = {Guocheng Shao and Tiankuang Zhou and Tao Yan and Yanchen Guo and Yun Zhao and Ruqi Huang and Lu Fang},\n' +
        '   journal = {Nanophotonics},\n' +
        '   doi = {doi:10.1515/nanoph-2024-0504},\n' +
        '   year = {2025},\n' +
        '   lastchecked = {2025-01-28}\n' +
        '   }';
} else if (id === 'BeyondTalking') {
    contentParagraph.textContent = '@article{BeyondTalking,\n' +
        '   url = {https://doi.org/10.1007/s11263-024-02300-7},\n' +
        '   title = {Beyond Talking – Generating Holistic 3D Human Dyadic Motion for Communication},\n' +
        '   author = {Mingze Sun and Chao Xu and Xinyu Jiang and Yang Liu and Baigui Sun and Ruqi Huang},\n' +
        '   journal = {International Journal of Computer Vision},\n' +
        '   doi = {10.1007/s11263-024-02300-7},\n' +
        '   year = {2024},\n' +
        '   }';
} else {
    contentParagraph.textContent = 'None';
}