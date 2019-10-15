<template>
    <section class="main">
        <h1 class="main-title">Помогая с Проектом</h1>
        <ul class="main-text main-text__block-1">
            <li>Получай информацию о «горячих событиях», нуждающихся в помощи</li>
            <li>Будь увереным в безопастности платежей</li>
            <li>Быстро и лекго перевести пожертвование</li>
        </ul>
        <ul class="main-text main-text__block-2">
            <li>Получай отчеты о результатах фондов и проектов, которым ты помог</li>
            <li>Распредели пожертвования между фондам</li>
            <li>Четко следуй предписаниям Шариат</li>
        </ul>
        <a class="main-link" href="#">Узнать больше о Проекте</a>
    </section>
</template>

<script>
export default {
    name: "main",
    props: {}
}
</script>

<style lang="sass" scoped>
.main
    overflow: hidden
    position: relative
    box-sizing: border-box
    width: 1280px
    height: 100%
    display: flex
    flex-direction: row
    justify-content: center
    +tablet
        width: 768px
        flex-direction: column
        align-items: center
        justify-content: space-between
    +mobile
        width: 360px
        justify-content: flex-start

    &::after
        content: ''
        background: url('../assets/globe.png') bottom no-repeat
        position: absolute
        z-index: 1
        top: 0
        left: 0
        bottom: 0
        right: 0
        margin: auto
        width: 424px
        height: 424px
        border-radius: 50%
        box-shadow: 0 0 0 44px #F3F3F3, 0 0 0 64px rgba(255, 255, 255, 0.5), 0 0 0 246px #F3F3F3, 0 0 0 256px rgba(255, 255, 255, 0.5), 0 0 0 405px #F3F3F3, 0 0 0 410px rgba(255, 255, 255, 0.5)
        +mobile
            display: none
            visibility: hidden

    &-title
        width: 323px
        position: relative
        z-index: 5
        padding-top: 218px
        order: 2
        align-self: flex-start
        margin: 0 -323px 0 0
        font-family: $font-face-2
        font-weight: 300
        font-size: 50px
        line-height: 60px
        text-align: center
        letter-spacing: -0.01em
        +tablet
            width: auto
            order: 1
            padding: 0
            margin: 80px auto 0
        +mobile
            font-size: 30px
            line-height: 38px
            margin: 0 auto
            padding: 60px 0 20px 0

    &-text
        width: 272px
        line-height: 24px
        font-weight: 500
        margin: 0
        padding: 0
        list-style: none
        +tablet
            width: 297px
        +mobile
            width: 290px
            line-height: 20px

        &__block-1
            align-self: center
            order: 1
            text-align: right
            margin-right: 117px
            +tablet
                order: 2
                margin: 0 0 -227px 68px
                text-align: left
                align-self: flex-start
            +mobile
                margin: 0
                padding: 0 0 20px 50px

        &__block-2
            align-self: center
            margin-left: 117px
            order: 4
            +tablet
                order: 3
                margin: 0 40px 0 0
                align-self: flex-end
            +mobile
                align-self: flex-start
                margin: 0
                padding: 0 0 30px 50px

        &__block-1
            li
                margin-bottom: 84px
                position: relative
                z-index: 2
                +tablet
                    margin-bottom: 30px
                +tablet
                    margin-bottom: 20px

                &:last-child
                    margin-bottom: 0

                &::before
                    content: ''
                    width: 10px
                    height: 10px
                    position: absolute
                    background-color: #F64D40
                    border-radius: 50%
                    top: 8px

            li
                &:nth-child(1)
                    &::before
                        left: calc(100% + 52px)
                        +tablet
                            left: -28px
                &:nth-child(2)
                    &::before
                        left: calc(100% + 9px)
                        +tablet
                            left: -28px
                &:nth-child(3)
                    &::before
                        left: calc(100% + 37px)
                        +tablet
                            left: -28px

        &__block-2
            li
                margin-bottom: 84px
                position: relative
                z-index: 2
                +tablet
                    margin-bottom: 30px
                +mobile
                    margin-bottom: 20px

                &:last-child
                    margin-bottom: 0

                &::before
                    content: ''
                    width: 10px
                    height: 10px
                    position: absolute
                    background-color: #F64D40
                    border-radius: 50%
                    top: 8px

            li
                &:nth-child(1)
                    &::before
                        right: calc(100% + 45px)
                        +tablet
                            left: -28px
                &:nth-child(2)
                    &::before
                        right: calc(100% + 6px)
                        +tablet
                            left: -28px
                &:nth-child(3)
                    &::before
                        right: calc(100% + 42px)
                        +tablet
                            left: -28px

    &-link
        position: relative
        z-index: 3
        width: 323px
        margin-bottom: 211px
        order: 3
        align-self: flex-end
        text-decoration: none
        color: #B19B69
        display: block
        font-weight: 500
        font-size: 14px
        line-height: 20px
        text-align: center
        +tablet
            order: 4
            margin: 0 auto 78px
</style>
