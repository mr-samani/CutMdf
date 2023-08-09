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
    //https://www.cutlistoptimizer.com/

    public function packing()
    {

        $bin = (new RectangleBinPack(1000, 1000, false))->init();
        $boxes = [
            (object)['width' => 250, 'height' => 100],
            (object)['width' => 800, 'height' => 80],
            (object)['width' => 800, 'height' => 180],
            (object)['width' => 100, 'height' => 85],
            (object)['width' => 750, 'height' => 100],
            (object)['width' => 250, 'height' => 100],
            (object)['width' => 140, 'height' => 85],
        ];
        usort($boxes, function ($a, $b) {
            if ($a->width < $b->width)
                return 1;
            else if ($a->width > $b->width)
                return -1;
            else
                return 0;
        });
        $result = [];
        $index = 0;
        foreach ($boxes as $box) {
            $packed = $bin->insert(new Rectangle($box->width, $box->height), "RectBottomLeftRule");
            array_push($result, [
                'x' => $packed->getX(),
                'y' => $packed->getY(),
                'width' => $packed->getWidth(),
                'height' => $packed->getHeight(),
                'index' => $index++
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
