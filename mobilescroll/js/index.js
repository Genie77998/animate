require([
    'zepto.min',
    'fastclick',
    'tpl.min',
    'city-list',
    'mobiscroll.min'
], function(a, b, FastClick, cityList) {
    var $mainBox = $('#mainBox');
    window.addEventListener('load', function() {
        FastClick.attach(document.body);
    }, false);
    $(function(){
        render();
    });
    function render() {
        var _obj = {
            vehicleNum: '',
            cityName: '',
            owner: '',
            tokenNo: '',
            frameNo: '',
            motorNo: '',
            brand: '',
            reg: ''
        }
        _obj.cityList = cityList;
        _obj.proList = ['京', '沪', '浙', '苏', '粤', '鲁', '晋', '冀', '豫', '川', '渝', '辽', '吉', '黑', '皖', '鄂', '湘', '赣', '闽', '陕', '甘', '宁', '蒙', '津', '贵', '云', '桂', '琼', '青', '新', '藏'];
        _obj.provinceList = ["北京", "天津", "上海", "重庆", "河北", "山西", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "甘肃", "四川", "贵州", "海南", "云南", "青海", "陕西", "广西", "西藏", "宁夏", "新疆", "内蒙古"];
        $mainBox.html(template('reportTmpl', _obj));
        $('select[name=province]').mobiscroll().select({
            theme: 'mobiscroll',
            mode: 'scroller',
            lang: 'zh',
            display: 'modal',
            buttons: ['set']
        });

        $('select[name=cityName]').mobiscroll().select({
            theme: 'mobiscroll',
            placeholder: "请选择行驶城市",
            lang: 'zh',
            display: 'modal',
            label: 'City',
            group: true,
            groupLabel: 'Province',
            fixedWidth: [100, 170]
        });
        $('input[name=reg]').mobiscroll().date({
            theme: 'mobiscroll',
            dateFormat: 'yy-mm-dd',
            mode: 'scroller',
            lang: 'zh',
            maxDate: new Date(),
            display: 'modal',
            buttons: ['set'],
            startYear: 1980
        });
        $('input[name=time]').mobiscroll().time({
            theme: 'mobiscroll',
            mode:'scroller',
            lang: 'zh',
            display:'modal',
            preset: 'date',
            timeWheels: 'HHii:ss',
            timeFormat: 'HH:ii:ss',
            buttons : ['set'],
            callback : function(a){
                $('[name=time]').next().html('您选择的时间为'+a);
            }
        });
    }
});
