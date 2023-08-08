<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Padam87\BinPacker\BinPacker;
use Padam87\BinPacker\Model\Bin;
use Padam87\BinPacker\Model\Block;

//https://github.com/Padam87/bin-packer
class PackagingController extends Controller
{
    public function packing()
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
  
        $Result = [];
        foreach ($blocks as $b) {
            $objClass = new \ReflectionClass($b);

            $classProperties = $objClass->getProperties();

            foreach ($classProperties as $propertie) {
                $propertie->setAccessible(true);
                $arrayForJSON[$propertie->getName()] = $propertie->getValue($b);
            } 
            array_push($Result, $arrayForJSON);
        }



        return response()->json($Result);
    }

    function getJsonData($b){
        $var = get_object_vars($b);
        foreach ($var as &$value) {
            if (is_object($value) && method_exists($value,'getJsonData')) {
                $value = $value->getJsonData();
            }
        }
        return $var;
    }


}
