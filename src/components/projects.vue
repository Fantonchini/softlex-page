<template>
    <div class="projects">
        <h3 class="projects-about projects-about-padding">проекты рядом</h3>
        <div class="project-wrapper">
            <div class="project-plate">
                <div class="project-plate__image1"></div>
                <div class="project-plate__tag">помощь нуждающимся</div>
                <div class="project-plate__tag">закят</div>
                <div class="project-plate__header">Сбор средств для постойки школ в Индонезии</div>
                <div class="project-plate__text">Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена</div>
                <button class="project-plate__hand-button"></button>
            </div>
            <div class="project-plate">
                <div class="project-plate__image2"></div>
                <div class="project-plate__tag">помощь нуждающимся</div>
                <div class="project-plate__tag">закят</div>
                <div class="project-plate__header">Поможем дедушке построить пекарню</div>
                <div class="project-plate__text">Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена</div>
                <button class="project-plate__hand-button"></button>
            </div>
            <div class="project-plate">
                <div class="project-plate__image3"></div>
                <div class="project-plate__tag">помощь нуждающимся</div>
                <div class="project-plate__tag">закят</div>
                <div class="project-plate__header">Сбор для Арифулиной Дианы</div>
                <div class="project-plate__text">Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена</div>
                <button class="project-plate__hand-button"></button>
            </div>
        </div>
        <button class="projects-open-all">Смотреть все проекты</button>
    </div>
</template>

<script>
    export default {
        name: "projects",
        props: {

        },
        data() { //local variables
            return {

            }
        },
        mounted() {

        },
        computed: {

        },
        methods: {

        }
    }
</script>

<style lang="sass" scoped>
.projects
    width: 1122px
    text-align: center
    padding-bottom: 100px
    +tablet
        width: 688px
    +mobile
        width: 320px

    &-open-all
        color: #B19B69
        background-color: white
        border: none
        line-height: 20px
        font-weight: bold
        padding: 10px 20px
        box-shadow: 0 10px 25px rgba(177, 155, 105, 0.3)
        border-radius: 40px
        outline: none
        position: relative
        cursor: pointer
        +mobile
            display: none
            visibility: hidden

        &::before
            content: ''
            width: 441px
            height: 1px
            background-color: #E5DECC
            position: absolute
            top: 50%
            right: calc(100% + 10px)
            +tablet
                width: 233px

        &::after
            content: ''
            width: 441px
            height: 1px
            background-color: #E5DECC
            position: absolute
            top: 50%
            left: calc(100% + 10px)
            +tablet
                width: 234px

    &-about
        font-size: 13px
        line-height: 23px
        font-weight: bold
        letter-spacing: 0.05em
        text-transform: uppercase
        position: relative
        text-align: start
        +mobile
            font-size: 10px
            line-height: 20px

        &::before
            content: ''
            width: 10px
            height: 10px
            position: absolute
            top: 25%
            right: calc(100% + 20px)
            background-color: #F64D40
            border-radius: 50%
        &-padding
            margin: 100px 0 40px 30px
            +tablet
                margin: 102px 0 48px 30px
            +mobile
                margin: 80px 0 20px 26px

.project
    &-wrapper
        width: 100%
        margin: 0 auto
        display: flex
        flex-direction: row
        justify-content: space-between
        text-align: start
        padding-bottom: 100px

    &-plate
        width: 340px
        height: 392px
        padding-right: 20px
        position: relative
        +tablet
            width: 325px
            height: 499px
            padding: 0 20px 0 20px
            &:nth-child(3)
                visibility: hidden
                display: none
        +mobile
            width: 320px
            height: 442px
            &:nth-child(2)
                visibility: hidden
                display: none

        &::after
            content: ''
            position: absolute
            width: 311px
            height: 192px
            background-color: #F3F3F3
            top: 19px
            left: 29px
            z-index: -1
            border-radius: 0 0 10px 10px
            +tablet
                width: 325px
                height: 450px
                left: 0
            +mobile
                width: 320px
                height: 395px


        &__image1
            width: 100%
            height: 180px
            background: url('../assets/watermark-d.png') 10px 10px no-repeat, url("../assets/plate-image-1.png") no-repeat
            border-radius: 0 10px 10px 10px
            +tablet
                width: 285px
                height: 160px

        &__image2
            width: 100%
            height: 180px
            background: url('../assets/watermark-n.png') 10px 10px no-repeat, url("../assets/plate-image-2.png") no-repeat
            border-radius: 0 10px 10px 10px
            +tablet
                width: 285px
                height: 160px

        &__image3
            width: 100%
            height: 180px
            background: url('../assets/watermark-n.png') 10px 10px no-repeat, url("../assets/plate-image-3.png") no-repeat
            border-radius: 0 10px 10px 10px
            +tablet
                width: 285px
                height: 160px

        &__tag
            color: #7D7D7D
            font-size: 12px
            line-height: 20px
            border: 1px solid #E0E0E0
            background-color: white
            border-radius: 10px
            text-align: center
            display: inline-block
            padding: 0 12px
            margin: 20px 10px 20px 0
            +tablet
                margin: 21px 10px 21px 0

        &__header
            font-size: 16px
            line-height: 26px
            font-weight: 500
            margin-bottom: 20px
            +mobile
                font-size: 14px
                line-height: 24px

        &__text
            font-weight: 300
            font-size: 16px
            line-height: 26px
            +mobile
                font-size: 14px
                line-height: 24px

        &__hand-button
            display: none
            visibility: hidden
            +tablet
                visibility: visible
                display: block
                position: absolute
                bottom: 0
                left: 0
                right: 0
                margin: auto
                width: 60px
                height: 60px
                border: none
                outline: none
                background: url("../assets/hand.svg") center center no-repeat, linear-gradient(360deg, #005EF3 0%, #689EF4 100%)
                box-shadow: 0px 15px 25px rgba(0, 94, 243, 0.4)
                border-radius: 50%
                cursor: pointer
</style>
