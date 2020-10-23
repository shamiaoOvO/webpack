import $ from 'jquery'
import('./css/style.css')
import('./css/style.scss')
import('./css/style.less')

$(function () {
    $('li:odd').css("backgroundColor", "salmon")
    $('li:even').css("backgroundColor", "gold")
})

class Person {
    static name = "fawaikuangtuzhangsan";
}
console.log(Person.name);