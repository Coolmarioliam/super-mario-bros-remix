namespace SpriteKind {
    export const goomba = SpriteKind.create()
    export const koopa_troopa = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mario.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        Mario.vy = -200
    }
})
function enemy_loader () {
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        goombasprite = sprites.create(img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e d f e e e e f d e e e . 
            . e e e d f f f f f f d e e e . 
            e e e e d f d e e d f d e e e e 
            e e e e d d d e e d d d e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d . . . . 
            . f f f f f d d d d d f f . . . 
            . f f f f f f d d d f f f . . . 
            . . f f f f f . . f f f . . . . 
            `, SpriteKind.goomba)
        tiles.placeOnTile(goombasprite, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        goombasprite,
        [img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e d f e e e e f d e e e . 
            . e e e d f f f f f f d e e e . 
            e e e e d f d e e d f d e e e e 
            e e e e d d d e e d d d e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d . . . . 
            . f f f f f d d d d d f f . . . 
            . f f f f f f d d d f f f . . . 
            . . f f f f f . . f f f . . . . 
            `,img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e d f e e e e f d e e e . 
            . e e e d f f f f f f d e e e . 
            e e e e d f d e e d f d e e e e 
            e e e e d d d e e d d d e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . . . d d d d d d d d f f . . 
            . . . f f d d d d d f f f f f . 
            . . . f f f d d d f f f f f f . 
            . . . . f f f . . f f f f f . . 
            `],
        500,
        true
        )
        goombasprite.vx = -10
        goombasprite.ay = 400
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        koopa_troopasprite = sprites.create(img`
            ............1...
            ...........111..
            ..........d111..
            .........dd117d.
            .........dd117d.
            .........dd117d.
            .........dd111d.
            .........ddd1ddd
            .........ddddd7d
            ...77777..dddddd
            ..7577757.dd.ddd
            .77757577.dd..dd
            .7117577771dd.dd
            .7175757771dd.d.
            .5757775751dd...
            .75777775711dd..
            .57577757571d...
            .77757577751d...
            .77775777771....
            111757577711....
            ..111775111dd...
            .ddd11111ddddd..
            dddd......ddddd.
            `, SpriteKind.koopa_troopa)
        tiles.placeOnTile(koopa_troopasprite, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        koopa_troopasprite.vx = -10
        koopa_troopasprite.ay = 400
        animation.runImageAnimation(
        koopa_troopasprite,
        [img`
            ...........1....
            ..........111...
            .........d111d..
            .........d117dd.
            .........d117dd.
            .........d117dd.
            .........d111dd.
            .........dd1dd7d
            .........ddddddd
            .........dd..ddd
            ...7777771d...dd
            ..75777571dd....
            .7775757771dd...
            .7117577771dddd.
            .7175757771ddd..
            .57577757511d...
            .75777775771d...
            .57577757571d...
            .77757577751....
            .77775777771....
            111757577711....
            .dd11775111d....
            .ddd11111ddd....
            .ddd....ddd.....
            ..ddd..ddd......
            `,img`
            ................
            ................
            ............1...
            ...........111..
            ..........d111..
            .........dd117d.
            .........dd117d.
            .........dd117d.
            .........dd111d.
            .........ddd1ddd
            .........ddddd7d
            ...77777..dddddd
            ..7577757.dd.ddd
            .77757577.dd..dd
            .7117577771dd.dd
            .7175757771dd.d.
            .5757775751dd...
            .75777775711dd..
            .57577757571d...
            .77757577751d...
            .77775777771....
            111757577711....
            ..111775111dd...
            .ddd11111ddddd..
            dddd......ddddd.
            `],
        500,
        true
        )
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Mario.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        Mario.vy = -200
    }
})
function level_loader () {
    if (level == 1) {
        tiles.setTilemap(tilemap`level1`)
    }
    tiles.placeOnRandomTile(Mario, assets.tile`myTile2`)
    enemy_loader()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.koopa_troopa, function (sprite, otherSprite) {
    if (Mario.y < goombasprite.y) {
        if (true) {
            Mario.vy = -100
            animation.runImageAnimation(
            otherSprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . e e e e e e e e e e . . . 
                . e e f f f e e e e f f f e e . 
                e e d d d d f f f f d d d d e e 
                e e e e e e e e e e e e e e e e 
                . . . d d d d d d d d d d . . . 
                . . . . d d d d d d d d . . . . 
                . f f f f f . . . . f f f f f . 
                `],
            1000,
            false
            )
            pause(200)
        }
    } else {
        animation.runImageAnimation(
        Mario,
        [img`
            . . . . . 2 2 2 2 . . . . . 
            . . d . 2 2 2 2 2 2 . d . . 
            d d d e d e d d e d e d d d 
            d d e e d e d d e d e e d d 
            d d e e e d d d d e e e d d 
            . . e e e e d d e e e e . . 
            . . . e d e e e e d e . . . 
            . . . e d d d d d d e . . . 
            . . 2 2 2 d d d d 2 2 2 . . 
            . e e 2 2 e e e e 2 2 e e . 
            . e e e 2 2 e e 2 2 e e e . 
            . e e e 2 d 2 2 d 2 e e e . 
            . e e e 2 2 2 2 2 2 e e e . 
            . . e e 2 2 2 2 2 2 e e . . 
            `],
        500,
        false
        )
        Mario_dead = 1
        Mario.vy = -400
        Mario.setFlag(SpriteFlag.GhostThroughWalls, true)
        game.over(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goomba, function (sprite, otherSprite) {
    if (Mario.y < goombasprite.y) {
        Mario.vy = -100
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . e e e e e e e e e e . . . 
            . e e f f f e e e e f f f e e . 
            e e d d d d f f f f d d d d e e 
            e e e e e e e e e e e e e e e e 
            . . . d d d d d d d d d d . . . 
            . . . . d d d d d d d d . . . . 
            . f f f f f . . . . f f f f f . 
            `],
        1000,
        false
        )
        pause(200)
        otherSprite.destroy()
    } else {
        animation.runImageAnimation(
        Mario,
        [img`
            . . . . . 2 2 2 2 . . . . . 
            . . d . 2 2 2 2 2 2 . d . . 
            d d d e d e d d e d e d d d 
            d d e e d e d d e d e e d d 
            d d e e e d d d d e e e d d 
            . . e e e e d d e e e e . . 
            . . . e d e e e e d e . . . 
            . . . e d d d d d d e . . . 
            . . 2 2 2 d d d d 2 2 2 . . 
            . e e 2 2 e e e e 2 2 e e . 
            . e e e 2 2 e e 2 2 e e e . 
            . e e e 2 d 2 2 d 2 e e e . 
            . e e e 2 2 2 2 2 2 e e e . 
            . . e e 2 2 2 2 2 2 e e . . 
            `],
        500,
        false
        )
        Mario.vy = -400
        Mario.setFlag(SpriteFlag.GhostThroughWalls, true)
        Mario_dead = 1
    }
})
let koopa_troopasprite: Sprite = null
let goombasprite: Sprite = null
let Mario: Sprite = null
let level = 0
let Mario_dead = 0
Mario_dead = 0
level = 1
Mario = sprites.create(img`
    . . . 2 2 2 2 2 . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . . e e e d d e d . . . . . . . 
    . e d e d d d e d d d . . . . . 
    . e d e e d d d e d d d . . . . 
    . e e d d d d e e e e . . . . . 
    . . . d d d d d d d . . . . . . 
    . . e e 2 e e e . . . . . . . . 
    . e e e 2 e e 2 e e e . . . . . 
    e e e e 2 2 2 2 e e e e . . . . 
    d d e 2 d 2 2 d 2 e d d . . . . 
    d d d 2 2 2 2 2 2 d d d . . . . 
    d d 2 2 2 2 2 2 2 2 d d . . . . 
    . . 2 2 2 . . 2 2 2 . . . . . . 
    . e e e . . . . e e e . . . . . 
    e e e e . . . . e e e e . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
level_loader()
scene.cameraFollowSprite(Mario)
controller.moveSprite(Mario, 100, 0)
Mario.ay = 400
