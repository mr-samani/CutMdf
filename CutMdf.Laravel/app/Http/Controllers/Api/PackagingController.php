<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Padam87\BinPacker\BinPacker;
use Padam87\BinPacker\Model\Bin;
use Padam87\BinPacker\Model\Block;
use Padam87\BinPacker\Visualizer;
use BinPacking\RectangleBinPack;
use BinPacking\Rectangle;


//https://github.com/Padam87/bin-packer
class PackagingController extends Controller
{

    public function packing()
    {

        $bin = (new RectangleBinPack(1000, 1000))->init();
        $result=[];
        for ($i = 0; $i < 10; $i++) {
            $packed = $bin->insert(new Rectangle(random_int(100,500),random_int(100,200)), "RectBestAreaFit");
            array_push($result, [
                'x' => $packed->getX(),
                'y' => $packed->getY(),
                'width' => $packed->getWidth(),
                'height' => $packed->getHeight(),
            ]);
        }
        return $result;
    }





    public function packing1()
    {
        $bin = new Bin(1000, 1000);
        $blocks = [
            new Block(100, 100),
            new Block(300, 100),
            new Block(175, 125),
            new Block(200, 75),
            new Block(200, 75),
        ];

        $packer = new BinPacker();

        $blocks = $packer->pack($bin, $blocks);
        //dd($blocks);
        return response()->json($this->getJsonData($blocks));
    }

    function getJsonData($blocks)
    {
        $result = [];
        /** @var Block $block */
        foreach ($blocks as $block) {
            $node = $block->getNode();

            // if ($node == null || !$node->isUsed()) {
            //     continue;
            // }

            array_push($result, [
                'x' => $node->getX(),
                'y' => $node->getY(),
                'width' => $node->getX() + $block->getWidth(),
                'height' => $node->getY() + $block->getHeight(),
                'rotatable' => $block->isRotatable(),
                'id' => $block->getId(),
                'used' => $node->isUsed()
            ]);
            //  $draw->annotation($node->getX() + 10, $node->getY() + 20, $block->getId());
            //  $draw->annotation($node->getX() + 10, $node->getY() + 40, sprintf('%s x %s', $block->getWidth(), $block->getHeight()));
        }

        return $result;
    }
}
