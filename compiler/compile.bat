@echo off
ECHO.
java -jar ../compiler/closure-compiler-v20170910.jar ^
--compilation_level ADVANCED_OPTIMIZATIONS ^
--js ../v2/js_src/global.js ^
--js ../v2/js_src/TickTackCell.js ^
--js ../v2/js_src/TickTackMatch.js ^
--js ../v2/js_src/MainApp.js ^
--js_output_file ./public/js/ticktacktoe.min.js