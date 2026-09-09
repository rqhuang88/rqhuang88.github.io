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
        '   title = {Enhancing Human Optical Flow via 3D Spectral Prior},\n' +
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
} else if (id === 'Adaptive') {
    contentParagraph.textContent = '@article{Zhang2025,\n' +
        '   url = {https://doi.org/10.1038/s41612-025-01044-6},\n' +
        '   title = {Adaptive high-resolution mapping of air pollution with a novel implicit 3D representation approach},\n' +
        '   author = {Ting Zhang and Bo Zheng and Ruqi Huang},\n' +
        '   journal = {npj Climate and Atmospheric Science},\n' +
        '   doi = {10.1038/s41612-025-01044-6},\n' +
        '   year = {2025},\n' +
        '   }';
}else if (id === 'VIPTour') {
    contentParagraph.textContent = '@article{lin2025ai,\n' +
        '   url = {https://doi.org/10.1038/s44387-025-00006-w},\n' +
        '   title = {AI system facilitates people with blindness and low vision in interpreting and experiencing unfamiliar environments},\n' +
        '   author = {Lin, Haozhe and Gong, Jiangtao and Wang, Yu and Zhang, Jinsong and Bai, Bing and Zhang, Yan and Wang, Luyao and Wei, Chenyu and Cao, Yancheng and Li, Kun and others},\n' +
        '   journal = {npj Artificial Intelligence},\n' +
        '   doi = {10.1038/s44387-025-00006-w},\n' +
        '   year = {2025},\n' +
        '   }';
}else if (id === 'ARMO') {
    contentParagraph.textContent = '@article{sun2025armo,\n' +
        '   url = {https://doi.org/10.48550/arXiv.2503.20663},\n' +
        '   title = {ARMO: Autoregressive Rigging for Multi-Category Objects},\n' +
        '   author = {Sun, Mingze and Mao, Shiwei and Chen, Keyi and Chen, Yurun and Lu, Shunlin and Wang, Jingbo and Dong, Junting and Huang, Ruqi},\n' +
        '   journal = {arXiv preprint arXiv:2503.20663},\n' +
        '   doi = {10.48550/arXiv.2503.20663},\n' +
        '   year = {2025},\n' +
        '   }';
}else if (id === 'Combo') {
    contentParagraph.textContent = '@article{xu2024combo,\n' +
        '   url = {https://doi.org/10.48550/arXiv.2408.09397},\n' +
        '   title = {Combo: Co-speech holistic 3D human motion generation and efficient customizable adaptation in harmony},\n' +
        '   author = {Xu, Chao and Sun, Mingze and Cheng, Zhi-Qi and Wang, Fei and Liu, Yang and Sun, Baigui and Huang, Ruqi and Hauptmann, Alexander},\n' +
        '   journal = {arXiv preprint arXiv:2408.09397},\n' +
        '   doi = {10.48550/arXiv.2408.09397},\n' +
        '   year = {2024},\n' +
        '   }';
}else if (id === 'PIN') {
    contentParagraph.textContent = '@article{yan2025complete,\n' +
        '   url = {https://doi.org/10.1038/s43588-025-00866-x},\n' +
        '   title = {A complete photonic integrated neuron for nonlinear all-optical computing},\n' +
        '   author = {Yan, Tao and Guo, Yuting and Zhou, Tong and others},\n' +
        '   journal = {Nature Computational Science},\n' +
        '   doi = {10.1038/s43588-025-00866-x},\n' +
        '   year = {2025},\n' +
        '   }';
} else if (id === 'DeepWonder3D') {
    contentParagraph.textContent = '@article{chen2026deepwonder3d,\n' +
        '   title = {Rapid robust high-fidelity 3D neuronal extraction from multiview calcium imaging datasets},\n' +
        '   author = {Chen, Yujia and Zhang, Guoxun and Wang, Mingrui and Zhang, Yuanlong and Xie, Jingyu and Zhao, Zhifeng and Huang, Ruqi and Wu, Jiamin and Dai, Qionghai},\n' +
        '   journal = {Nature Methods},\n' +
        '   year = {2026},\n' +
        '   doi = {10.1038/s41592-026-03215-6},\n' +
        '   url = {https://doi.org/10.1038/s41592-026-03215-6}\n' +
        '   }';
} else if (id === 'NFR') {
    contentParagraph.textContent = '@article{chen2026nfr,\n' +
        '   title = {NFR: Neural Feature-Guided Non-Rigid Shape Registration},\n' +
        '   author = {Chen, Zhangquan and Jiang, Puhua and Sun, Mingze and Huang, Ruqi},\n' +
        '   journal = {Computer Graphics Forum},\n' +
        '   pages = {e70597},\n' +
        '   year = {2026},\n' +
        '   doi = {10.1111/cgf.70597},\n' +
        '   url = {https://doi.org/10.1111/cgf.70597}\n' +
        '   }';
} else if (id === 'UniGarment') {
    contentParagraph.textContent = '@inproceedings{chen2026unigarment,\n' +
        '   title = {UniGarment: Topology-Guided Texture Normalization for Simulation-Ready Garment Digitization},\n' +
        '   author = {Chen, Junhao and Kong, Jing and Chen, Mingjin and Zhang, Boran and Zhang, Saining and Zhao, Hao and Huang, Ruqi and Ma, Fei and Tian, Qi},\n' +
        '   booktitle = {Proceedings of the 34th ACM International Conference on Multimedia},\n' +
        '   year = {2026},\n' +
        '   numpages = {10},\n' +
        '   isbn = {979-8-4007-2213-4},\n' +
        '   doi = {10.1145/3767308.3835607},\n' +
        '   url = {https://doi.org/10.1145/3767308.3835607}\n' +
        '   }';
} else if (id === 'DANTE-W') {
    contentParagraph.textContent = '@inproceedings{wang2026dantew,\n' +
        '   title = {DANTE-W: Diffuse Albedo Neural Texturing in the Wild},\n' +
        '   author = {Wang, Guangyu and Lu, Tianheng and Huang, Ruqi and Fang, Lu},\n' +
        '   booktitle = {European Conference on Computer Vision},\n' +
        '   year = {2026}\n' +
        '   }';
} else if (id === 'OVOW') {
    contentParagraph.textContent = '@inproceedings{chen2026onevideo,\n' +
        '   title = {One Video, One World: Turning Monocular Video into Physical 4D Scenes},\n' +
        '   author = {Chen, Junhao and Zhang, Boran and Chen, Mingjin and Zhang, Henghaofan and Zhang, Saining and Zhu, Congcong and Zhao, Hao and Huang, Ruqi and Li, Zhihao and Wang, Yufei},\n' +
        '   booktitle = {European Conference on Computer Vision},\n' +
        '   year = {2026}\n' +
        '   }';
} else if (id === 'InceptionGS') {
    contentParagraph.textContent = '@inproceedings{lu2026inceptiongs,\n' +
        '   title = {InceptionGS: Generative Bootstrapping for Large-Scale Gaussian Splatting under Unstructured View Sampling},\n' +
        '   author = {Lu, Tianheng and Wang, Guangyu and Huang, Ruqi and Fang, Lu},\n' +
        '   booktitle = {European Conference on Computer Vision},\n' +
        '   year = {2026}\n' +
        '   }';
} else if (id === 'DEFAR') {
    contentParagraph.textContent = '@inproceedings{huang2026exposure,\n' +
        '   title = {Exposure Bias Can Alleviate Itself via Directional and Frequency Rectification in Flow Matching},\n' +
        '   author = {Huang, Guanbo and Mao, Jingjia and Huang, Fanding and Liu, Fengkai and Luo, Xiangyang and Liang, Yaoyuan and Lu, Jiasheng and Wang, Xiaoe and Liu, Pei and Fu, Ruiliu and Huang, Ruqi and Huang, Shao-Lun},\n' +
        '   booktitle = {European Conference on Computer Vision},\n' +
        '   year = {2026}\n' +
        '   }';
} else if (id === 'GS-Playground') {
    contentParagraph.textContent = '@inproceedings{jia2026gsplayground,\n' +
        '   title = {GS-Playground: A High-Throughput Photorealistic Simulator for Vision-Informed Robot Learning},\n' +
        '   author = {Jia, Yufei and Zhang, Heng and Zhang, Ziheng and Wu, Junzhe and Yu, Mingrui and Wang, Zifan and Jiang, Dixuan and Li, Zheng and Cao, Chenyu and Yu, Zhuoyuan and Yang, Xun and Ge, Haizhou and Zhang, Yuchi and Zhang, Jiayuan and Huang, Zhenbiao and Liu, Tianle and Chen, Shenyu and Wang, Jiacheng and Xie, Bin and Yao, Xuran and Deng, Xiwa and Wang, Guangyu and Zhang, Jinzhi and Hao, Lei and Chen, Zhixing and Chen, Yuxiang and Wang, Anqi and Tian, Hongyun and Yan, Yiyi and Cao, Zhanxiang and Jiang, Yizhou and Shao, Hanyang and Li, Yue and Shi, Lu and Sui, Wei and Cui, Hanqing and Qin, Yusen and Huang, Ruqi and Chen, Bokui and Han, Lei and Wang, Tiancai and Zhou, Guyue},\n' +
        '   booktitle = {Robotics: Science and Systems},\n' +
        '   year = {2026}\n' +
        '   }';
} else if (id === 'OmniVideo-R1') {
    contentParagraph.textContent = '@inproceedings{chen2026omnivideor1,\n' +
        '   title = {OmniVideo-R1: Reinforcing Audio-visual Reasoning with Query Intention and Modality Attention},\n' +
        '   author = {Chen, Zhangquan and Tao, Jiale and Li, Ruihuang and Hu, Yihao and Chen, Ruitao and Yang, Zhantao and Yu, Xinlei and Jing, Haodong and Zhang, Manyuan and Shao, Shuai and Wang, Biao and Lu, Qinglin and Huang, Ruqi},\n' +
        '   booktitle = {Proceedings of the International Conference on Machine Learning},\n' +
        '   year = {2026}\n' +
        '   }';
} else if (id === 'skeleton') {
    contentParagraph.textContent = '@inproceedings{sun2026animator,\n' +
        '   title = {Animator-Centric Skeleton Generation on Objects with Fine-Grained Details},\n' +
        '   author = {Sun, Mingze and Zeng, Cheng and Pei, Jiansong and Chen, Junhao and Song, Chaoyue and Wang, Shaohui and Chang, Tianyuan and Huang, Bin and Zeng, Zijiao and Huang, Ruqi},\n' +
        '   booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},\n' +
        '   pages = {17336--17345},\n' +
        '   year = {2026}\n' +
        '   }';
} else if (id === 'think3d') {
    contentParagraph.textContent = '@inproceedings{chen2026think,\n' +
        '   title = {Think with 3D: Geometric Imagination Grounded Spatial Reasoning from Limited Views},\n' +
        '   author = {Chen, Zhangquan and Zhang, Manyuan and Yu, Xinlei and Luo, Xufang and Sun, Mingze and Pan, Zihao and An, Xiang and Feng, Yan and Pei, Peng and Cai, Xunliang and Huang, Ruqi},\n' +
        '   booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},\n' +
        '   year = {2026},\n' +
        '   url = {https://arxiv.org/abs/2510.18632}\n' +
        '   }';
} else if (id === 'lottiegpt') {
    contentParagraph.textContent = '@inproceedings{chen2026lottiegpt,\n' +
        '   title = {LottieGPT: Tokenizing Vector Animation for Autoregressive Generation},\n' +
        '   author = {Chen, Junhao and Gao, Kejun and Cui, Yuehan and Sun, Mingze and Chen, Mingjin and Wang, Shaohui and Long, Xiaoxiao and Ma, Fei and Tian, Qi and Zhao, Hao and Huang, Ruqi},\n' +
        '   booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},\n' +
        '   pages = {31639--31651},\n' +
        '   year = {2026}\n' +
        '   }';
} else if (id === 'SSM') {
    contentParagraph.textContent = '@inproceedings{cai2026seeing,\n' +
        '   title = {Seeing Space and Motion: Enhancing Latent Actions with Geometric and Dynamic Awareness for Vision-Language-Action Models},\n' +
        '   author = {Cai, Zhejia and Yang, Yandan and Chang, Xinyuan and Liang, Shiyi and Chen, Ronghan and Xiong, Feng and Xu, Mu and Huang, Ruqi},\n' +
        '   booktitle = {IEEE International Conference on Robotics and Automation},\n' +
        '   year = {2026}\n' +
        '   }';
} else if (id === 'SIFThinker') {
    contentParagraph.textContent = '@inproceedings{chen2026sifthinker,\n' +
        '   title = {SIFThinker: Spatially-Aware Image Focus for Visual Reasoning},\n' +
        '   author = {Chen, Zhangquan and Zhao, Ruihui and Luo, Chuwei and Sun, Mingze and Yu, Xinlei and Kang, Yangyang and Huang, Ruqi},\n' +
        '   booktitle = {Proceedings of the AAAI Conference on Artificial Intelligence},\n' +
        '   year = {2026},\n' +
        '   url = {https://arxiv.org/abs/2508.06259}\n' +
        '   }';
} else if (id === 'GaussianMesh') {
    contentParagraph.textContent = '@inproceedings{cai2026improving,\n' +
        '   title = {Improving Multi-View Reconstruction via Texture-Guided Gaussian-Mesh Joint Optimization},\n' +
        '   author = {Cai, Zhejia and Jiang, Puhua and Mao, Shiwei and Cao, Hongkun and Huang, Ruqi},\n' +
        '   booktitle = {International Conference on 3D Vision},\n' +
        '   year = {2026}\n' +
        '   }';
} else if (id === 'DISCOVERSE') {
    contentParagraph.textContent = '@inproceedings{jia2025discoverse,\n' +
        '   title = {DISCOVERSE: Efficient Robot Simulation in Complex High-Fidelity Environments},\n' +
        '   author = {Jia, Yufei and Wang, Guangyu and Dong, Yuhang and Wu, Junzhe and Zeng, Yupei and Lin, Haonan and Wang, Zifan and Ge, Haizhou and Gu, Weibin and Ding, Kairui and Yan, Zike and Cheng, Yunjie and Li, Yue and Wang, Ziming and Li, Chuxuan and Sui, Wei and Shi, Lu and Tian, Guanzhong and Huang, Ruqi and Zhou, Guyue},\n' +
        '   booktitle = {IEEE/RSJ International Conference on Intelligent Robots and Systems},\n' +
        '   year = {2025},\n' +
        '   url = {https://arxiv.org/abs/2507.21981}\n' +
        '   }';
} else if (id === 'DRiVE') {
    contentParagraph.textContent = '@inproceedings{sun2025drive,\n' +
        '   title = {DRiVE: Diffusion-based Rigging Empowers Generation of Versatile and Expressive Characters},\n' +
        '   author = {Sun, Mingze and Chen, Junhao and Dong, Junting and Chen, Yurun and Jiang, Xinyu and Mao, Shiwei and Jiang, Puhua and Wang, Jingbo and Dai, Bo and Huang, Ruqi},\n' +
        '   booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},\n' +
        '   pages = {21170--21180},\n' +
        '   year = {2025},\n' +
        '   url = {https://arxiv.org/abs/2411.17423}\n' +
        '   }';
} else if (id === 'DV-Matcher') {
    contentParagraph.textContent = '@inproceedings{chen2025dvmatcher,\n' +
        '   title = {DV-Matcher: Deformation-based Non-Rigid Point Cloud Matching Guided by Pre-trained Visual Features},\n' +
        '   author = {Chen, Zhangquan and Jiang, Puhua and Huang, Ruqi},\n' +
        '   booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},\n' +
        '   year = {2025},\n' +
        '   url = {https://arxiv.org/abs/2408.08568}\n' +
        '   }';
} else if (id === 'dancetog') {
    contentParagraph.textContent = '@inproceedings{chen2026dancetogether,\n' +
        '   title = {Dance Together: Generating Interactive Multi-Person Video without Identity Drifting},\n' +
        '   author = {Chen, Junhao and Chen, Mingjin and Xu, Jianjin and Li, Xiang and Dong, Junting and Sun, Mingze and Jiang, Puhua and Li, Hongxiang and Yang, Yuhang and Zhao, Hao and Long, Xiaoxiao and Huang, Ruqi},\n' +
        '   booktitle = {International Conference on Learning Representations},\n' +
        '   year = {2026},\n' +
        '   url = {https://dancetog.github.io/}\n' +
        '   }';
} else {
    contentParagraph.textContent = 'None';
}
