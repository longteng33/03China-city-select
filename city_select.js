function SelectCity(obj) {
    this.provinceList = obj.provinceList
    this.province = obj.province;
    this.city = obj.city;
    this.district = obj.district;
    this.init();

}

SelectCity.prototype = {
    init: function () {
        //为第一级动态添加省
        // 使用new Option创建新的选项
        // Option()构造函数接受两个参数：文本(text)和值(value)
        // options.add方法，添加新的选项
        for (var i = 0; i < this.provinceList.length; i++) {
            this.province.options.add(new Option(this.provinceList[i].name, this.provinceList[i].name));
        };

        // onchange事件发生时，事件函数中的this指向的是触发事件的元素，所以需要通过bind改变this指向，使事件函数中的this指向这个new出来的对象
        this.province.onchange = this.changeProvince.bind(this);
        this.city.onchange = this.changecity.bind(this);
        this.changeProvince();
    },

    changeProvince: function () {
        //清空options
        this.city.options.length = 0;
        // selectedIndex 属性可设置或返回下拉列表中被选选项的索引号。

        var cityAry = this.provinceList[this.province.selectedIndex].cityList;
        //第二级动态添加市
        for (var i = 0; i < cityAry.length; i++) {
            var option = new Option(cityAry[i].name, cityAry[i].name);
            this.city.options.add(option);
        }
        //每次调用changeProvince()时，都调用一次changecity()，使地区发生变化
        this.changecity();
    },

    changecity: function () {
        this.district.options.length = 0;
        var districtAry = this.provinceList[this.province.selectedIndex].cityList[this.city.selectedIndex].districtList;
        //第三级动态添加地区
        for (var i = 0; i < districtAry.length; i++) {
            var option = new Option(districtAry[i], districtAry[i]);
            this.district.options.add(option);
        }
    },

}