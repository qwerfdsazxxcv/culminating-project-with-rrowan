// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`21001000020402020202020202020202020202030103020202020202020202020202020402020402040402040204040404040404040104040404040404040204020404020402020404040402040404020202020202020102020202020202040404020404040402020202020202020204020204040204020102040204040202040202020202020202020404040404040404040204040402020102020404040204040404040404040402020202020202040202020202020404020102040402020202020204020202020202040404040402040404040204020202020102020202040204040404020404040404020202020402020202020204020404040104040402040202020202020402020202020404040402040404040204020402020102020402040204040404020404040402020202020402020202020204020402020102020402040202020202020402020202020404040402020402040202020404020102040402020204020402020404040402020402020202020202040204020402020102020402040204020202020202020402020404040402040404040204040402040104020404040204040404020404040402020202020202040202020202020202020102020202020202020204020202020202040404040404040404040402040404020102040404020404040404040404040404050202020202020202020202020202020102020202020202020202020202020205`, img`
.2..............2..............2.
.2.22.2.22222222222222222.2.22.2.
.2222.222.......2.......222.2222.
........2..22.2.2.2.22..2........
.222222222.222..2..222.222222222.
......2......22.2.22......2......
22222.2222.2....2....2.2222.22222
....2......2.2222222.2......2....
.2222.2222.2.2..2..2.2.2222.2222.
....2......2.2..2..2.2......2....
.2222..2.2...22.2.22...2.2..2222.
.2.......2.2.2..2..2.2.2.......2.
.2222.2222.222.222.222.2222.2222.
......2.........2.........2......
22222222222.222.2.222.22222222222
................2................
`, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundCenter,sprites.dungeon.chestClosed,sprites.castle.rock0,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100002010101010101010101010101010101020101010101010101010101010101010202020202020202020201010101010101010101010101010101010101010102010101010101010101010101010101020101010101010101010101020202020201010101010101010101010101010101020202020201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102020202020101010101010101010101010101010101010101010101010101010101010101010202020202010101010102020202020101010101010202020201010101010101010101010101010101010101010101010101010101`, img`
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . 2 2 2 2 2 . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
