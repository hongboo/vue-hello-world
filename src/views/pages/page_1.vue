<template>
    <div class="page_1-box">
        <div class="title">
            <ul>
                <li v-for="(item, index) in tips" :key="index">
                    <a :href="`#tip_${index + 1}`">{{item.tip}}</a>
                </li>
            </ul>
        </div>
        <div class="body-box">
            <div id="tip_1" class="tip_1">
                <div class="code">
                    <div class="dec"><p>前后端分离的现代前端框架，有别于业务、数据、渲染、排版布局等混用的传统开发流程</p></div>
                    <pre>
                        <code>
                            &lt;html&gt;
                                &lt;head&gt;
                                    &lt;title&gt;传统的模式下网页结构&lt;/title&gt;
                                    &lt;link rel="stylesheet" href="style.css" /&gt;
                                &lt;/head&gt;
                                &lt;style type="text/css"&gt;
                                    div {
                                        width : 100%;
                                        height : auto;
                                        ...
                                    }
                                &lt;/style&gt;
                                &lt;body&gt;
                                    &lt;div&gt;
                                        &lt;span&gt;网页结构区域&lt;/span&gt;
                                        &lt;div&gt;
                                            区域1    
                                        &lt;/div&gt;    
                                        &lt;div&gt;
                                            区域2
                                        &lt;/div&gt;    
                                        &lt;div&gt;
                                            区域n...
                                        &lt;/div&gt;    
                                    &lt;/div&gt;    
                                &lt;/body&gt;
                                &lt;script type="text/javascript"&gt;
                                    var xxx = function() {
                                        var divArr = document.getElementsByTagName('div')
                                        // coding this area ... ...
                                    }
                                &lt;/script&gt;
                            &lt;/html&gt;
                        </code>
                    </pre>
                </div>
                <div class="code">
                    <pre>
                        <code>
                            &lt;template&gt;
                                &lt;div&gt;
                                    vue组件的结构
                                &lt;/div&gt;
                            &lt;/template&gt;
                            import outerComponentName from '@/xxx/component'
                            &lt;script&gt;
                                export default {
                                    component : { outerComponentName },
                                    name : 'currentComponentName',
                                    data() {
                                        return {
                                            // current component global variable
                                        }
                                    },
                                    methods : {
                                        // all function define
                                    },
                                    watch : {
                                        // when value change listener
                                    },
                                    computed : {
                                        // compute attribute
                                    },
                                    created : {
                                        // component before load trigger this
                                    },
                                    mounted : {
                                        // component after load trigger this
                                    },
                                }
                            &lt;/script&gt;
                            &lt;style scoped lang="scss" rel="stylesheet/scss"&gt;
                                // style
                            &lt;/style&gt;
                            
                        </code>
                    </pre>
                </div>
            </div>
            <div id="tip_2" class="tip_2">
                <div class="description">
                    <p>现代前端框架有别于传统的前端框架，它基于数据驱动，而非dom。</p>
                    <p>根据过往人们的经验，发现直接操作dom然后渲染数据是低效的，高消耗的方式。</p>
                    <p>基于数据驱动的方式就显得轻量级，使得前端开发更能专注于数据渲染，而非前期的铺垫工作。</p>
                    <p>这是理解和使用vue以及其它类似的框架必须要转变的思维方式。</p>
                </div>
                <div class="code">
                    <span>举个例子来说明区别点：</span>
                    <pre>
                        <code>
                            &lt;input type="text" name="inputTxt" value="testValue"/&gt;
                            &lt;script src="http://code.jquery.com/jquery-2.1.1.min.js"&gt;&lt;/script&gt;
                            &lt;script&gt;
                                var getVal = $('input').val()
                                var setVal = $('input').val('setTestVlaue')
                            &lt;/script&gt;

                            &lt;template&gt;
                                &lt;div&gt;
                                    &lt;input type="text" name="inputTxt" value="" v-bind="val"/&gt;
                                &lt;/div&gt;
                            &lt;/template&gt;
                            &lt;script&gt;
                                export default {
                                    data() {
                                        return {
                                            val : 'testValue'
                                        }
                                    },
                                    mounted() {
                                        console.log(this.val); // 获取input框的值
                                        this.val = 'setTestValue' //设置input框的值
                                    }
                                }
                            &lt;/script&gt;
                            
                        </code>
                    </pre>
                </div>
            </div>
            <div id="tip_3" class="tip_3">
                <div>
                    <p>现代前端框架最大的贡献莫过于模块化，组件化的设计思想，vue就是其中之一。</p>
                    <p >不论是前端开发还是后端开发，好的软件设计一定是高聚合，低耦合的。</p>
                    <p>比如传统前端开发常遇到相同样式重复写，相同的功能在不同的页面也要重复写的问题。</p>
                    <p>这就是没有解耦与聚合引起的问题。</p>
                    <p>后端开发常用的Spring框架的依赖注入，切面编程等，就是解耦与聚合最好的实践。</p>
                    <p>而聚合就对应了模块化，解耦就对应了组件化。</p>
                    <p>软件设计毕竟是一门工程学，我们可以从一般工程学角度类比软件设计，这样一切都顺理成章了。</p>
                </div>
            </div>
        </div>
        <div class="return-top-box" v-if="scrollRate > 0.5" @click="scroll">
            回到顶部
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    component : {},
    name : '',
    data() {
        return {
            tips : [
                {tip : '前后端分离的现代前端框架'},
                {tip : '基于数据，而非dom'},
                {tip : '一切皆组件'},
            ],
            scrollRate : 0,
        }
    },
    methods : {
        scroll() {
            location.href='#app'
        }
    },
    watch : {

    },
    computed : {

    },
    created() {

    },
    mounted() {
        let that = this;
        document.onscroll = function(){
            that.scrollRate = document.body.scrollTop / document.body.scrollHeight
        }
    },
}

</script>
<style scoped lang="scss" rel="stylesheet/scss">
@import '../../assets/default';
@import '../../assets/common';
.page_1-box {
    position: relative;
    left: 150px;
    .title {
        ul {
            li {
                list-style-type: none;
                border-bottom: 1px dashed #000;
                width: 65%;
                letter-spacing: 2px;
            }
        }
    }
    .body-box {
        .tip_1 {
            position: relative;
            // background-color: rgb(180, 231, 160);
            .code {
                width: 100%;
                float: left;
                .dec {
                    width: 65%;
                    letter-spacing: 2px;
                    background-color: rgb(233, 233, 223);
                    border-bottom: 1px dashed;
                    p {
                        padding-left: 10px;
                    }
                }
            }
            &:after {
                height : 0;
                content : ' ';
                display : block;
                clear : both;
                visibility : hidden;
            }
        }
        .tip_2 {
            // background-color: rgb(143, 184, 245);
            .description {
                position: relative;
                // left: 100px;
                width: 65%;
                letter-spacing: 2px;
                background-color: rgb(233, 233, 223);
                p {
                    margin: 10px 0;
                    border-bottom: 1px dashed;
                    padding-top: 5px;
                    padding-left: 10px;
                }
            }
            .code{
                span {
                    margin-left: 80px;
                }
            }
        }
        .tip_3 {
            div {
                background-color: rgb(233, 233, 223);
                // margin-left: 100px;
                width: 65%;
                letter-spacing: 2px;
                p {
                    margin: 10px 0;
                    border-bottom: 1px dashed;
                    padding-top: 5px;
                    padding-left: 10px;
                }
            }
        }
        pre {
            font-size: 14px;
            code {
                text-align: center;
            }
        }
    }

    .return-top-box {
        position: fixed;
        bottom: 163px;
        right: 250px;
        color: rgb(159, 233, 39);
        background-color: rgba(223, 230, 226, 0.336);
        padding: 10px;
        border-radius: 25px;
        a {
            color: rgb(235, 209, 209);
        }
        &:hover {
            cursor: pointer;
            background-color:rgb(80, 63, 238); 
        }
    }
}

</style>
