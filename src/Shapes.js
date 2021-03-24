export default class Shapes {
  constructor() {
    this.init();
  }
  init() {
    this.o = [110, 90, 70, 71, 91, 111, 109, 89, 69, 68, 88, 108, 112, 92, 72, 93, 113, 133, 87, 107, 127, 106, 126, 114, 134, 125, 145, 146, 154, 155, 135, 144, 164, 165, 175, 176, 156, 163, 183, 184, 185, 177, 195, 196, 197, 215, 216, 217, 235, 236, 237, 255, 256, 257, 203, 204, 205, 223, 224, 225, 243, 244, 245, 264, 265, 266, 274, 275, 276, 285, 286, 287, 293, 294, 295, 306, 307, 308, 314, 313, 312, 327, 328, 329, 333, 332, 331, 311, 310, 309, 330, 350, 351, 352, 349, 348, 143, 124, 105, 86, 67, 263, 284, 305, 326, 347, 353, 334, 315, 296, 277, 73, 94, 115, 136, 157, 262, 242, 222, 202, 182, 162, 142, 123, 104, 85, 66, 47, 48, 49, 50, 51, 52, 53, 74, 95, 116, 137, 158, 178, 198, 218, 238, 258, 278, 297, 316, 335, 354, 373, 372, 371, 370, 369, 368, 367, 346, 325, 304, 283, 388, 389, 390, 391, 392, 393, 374, 355, 336, 317, 298, 279, 259, 239, 219, 199, 179, 159, 138, 117, 96, 75, 54, 33, 32, 31, 30, 29, 28, 241, 221, 201, 181, 161, 141, 260, 240, 220, 200, 180, 160, 288, 267, 246, 226, 186, 206, 166, 147, 128, 122, 103, 84, 65, 46, 27, 139, 118, 97, 76, 55, 34, 8, 9, 10, 11, 12, 13, 289, 290, 291, 292, 247, 254, 268, 273];
    this.x = [1, 22, 43, 64, 85, 106, 127, 148, 169, 190, 211, 232, 253, 274, 295, 316, 337, 358, 379, 400, 381, 362, 343, 324, 305, 286, 267, 248, 229, 210, 191, 172, 153, 134, 115, 96, 77, 58, 39, 20, 171, 152, 133, 114, 95, 76, 57, 38, 19, 40, 18, 60, 59, 78, 97, 116, 135, 154, 173, 192, 212, 233, 254, 275, 296, 317, 338, 359, 380, 360, 399, 378, 398, 357, 336, 315, 294, 273, 252, 231, 2, 21, 23, 3, 41, 42, 44, 65, 86, 107, 128, 149, 170, 189, 168, 147, 126, 105, 84, 63, 382, 363, 344, 325, 306, 287, 268, 249, 230, 209, 228, 247, 266, 285, 304, 323, 342, 361, 341, 383, 62, 83, 104, 125, 146, 167, 188, 251, 272, 293, 314, 335, 356, 377, 24, 45, 66, 87, 108, 129, 150, 213, 234, 255, 276, 297, 318, 339, 151, 132, 113, 94, 75, 56, 37, 193, 174, 155, 136, 117, 98, 79, 322, 303, 284, 265, 246, 227, 208, 364, 345, 326, 307, 288, 269, 250, 397, 340, 80, 17, 4, 61, 321, 384, 5, 16, 25, 6, 15, 36, 365, 385, 386, 376, 396, 395, 366, 387, 394, 375, 26, 7, 14, 35];
    this.z = [381, 362, 343, 324, 305, 286, 267, 248, 229, 210, 191, 172, 153, 134, 115, 96, 57, 77, 58, 39, 20, 38, 76, 19, 40, 95, 114, 133, 152, 171, 190, 209, 208, 228, 247, 266, 285, 304, 323, 342, 361, 382, 363, 344, 325, 306, 287, 268, 249, 230, 211, 192, 173, 154, 135, 116, 97, 78, 59, 1, 21, 41, 61, 42, 23, 4, 22, 3, 2, 24, 25, 5, 26, 6, 7, 9, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 43, 44, 45, 62, 46, 48, 47, 49, 51, 50, 52, 53, 54, 55, 56, 189, 170, 151, 132, 113, 94, 75, 227, 246, 265, 284, 303, 322, 341, 81, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 394, 393, 395, 397, 396, 398, 400, 399, 364, 365, 345, 346, 366, 367, 347, 348, 368, 369, 349, 370, 350, 351, 371, 372, 352, 353, 373, 374, 354, 355, 375, 377, 356, 376, 357, 358, 378, 379, 359, 360, 380, 340, 339, 320, 326, 307, 288, 269, 250, 231, 212, 193, 174, 155, 136, 117, 98, 79, 60, 101, 82, 63, 338, 319, 300];
    this.v = [1, 21, 41, 61, 42, 62, 82, 102, 83, 103, 123, 143, 144, 124, 164, 184, 165, 185, 205, 225, 206, 226, 246, 266, 247, 267, 287, 327, 307, 288, 308, 328, 348, 329, 349, 369, 389, 20, 40, 60, 80, 59, 79, 99, 119, 98, 118, 138, 158, 137, 157, 177, 197, 176, 196, 216, 236, 215, 235, 255, 275, 254, 274, 294, 314, 293, 313, 333, 353, 332, 352, 372, 392, 334, 390, 391, 370, 371, 350, 351, 368, 286, 245, 204, 163, 122, 81, 373, 295, 256, 217, 178, 139, 100, 330, 331, 312, 273, 234, 195, 156, 117, 78, 39, 309, 268, 227, 186, 145, 104, 63, 22, 101, 120, 121, 140, 2, 19, 23, 43, 24, 5, 4, 3, 38, 18, 17, 58, 37, 16, 388, 393];
    this.s = [4, 23, 42, 61, 17, 38, 59, 80, 100, 99, 98, 321, 342, 363, 384, 340, 359, 378, 397, 301, 302, 303, 322, 323, 324, 77, 78, 79, 64, 83, 103, 123, 144, 143, 142, 141, 63, 62, 82, 102, 122, 121, 101, 81, 161, 182, 203, 224, 45, 46, 47, 48, 49, 51, 50, 52, 54, 53, 55, 56, 57, 58, 44, 43, 24, 5, 25, 6, 26, 7, 27, 8, 28, 9, 29, 10, 30, 11, 31, 12, 32, 13, 33, 14, 34, 15, 35, 16, 36, 37, 162, 163, 183, 204, 225, 226, 227, 228, 229, 230, 231, 232, 165, 164, 184, 185, 205, 257, 337, 357, 377, 343, 344, 364, 365, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 376, 375, 374, 373, 372, 371, 370, 369, 368, 367, 366, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 358, 338, 339, 177, 198, 219, 240, 278, 298, 318, 319, 299, 279, 258, 259, 260, 280, 300, 320, 233, 234, 235, 236, 237, 238, 239, 166, 167, 187, 207, 206, 186, 168, 188, 208, 169, 189, 209, 170, 190, 210, 171, 191, 211, 172, 192, 212, 173, 193, 213, 174, 194, 214, 175, 195, 215, 176, 196, 216, 197, 217, 218, 75, 95, 96, 76, 97, 306, 326, 325, 305, 304, 65, 84, 104, 124, 145, 256, 277, 297, 317, 336, 307, 94];
  }
}