

class Cilveks:
    def __init__(self, name, age, sex):
        self.vecums = age
        self.vards = name
        self.dzimums = sex
        self.info()
    
    def svinet_dz_d(self):
        self.vecums += 1

    def mainit_vardu(self, jaunais_vards):
        self.vards = jaunais_vards

    def mainit_dzimumu(self, jaunais_dzimums):
        if jaunais_dzimums == "":
            if self.dzimums == "s":
                self.dzimums = "v"
            else:
                self.dzimums = "s"
        else:
            self.dzimums = jaunais_dzimums
        self.info()
    

    def info(self):
        print("Sveiki, mani sauc", self.vards)
        print("Man ir", self.vecums, "gadu.")
        if self.dzimums == "s":
            print("Es esmu sieviete")
        elif self.dzimums == "v":
            print("Es esmu vīrietis")
        else:
            print("Es esmu", self.dzimums)

    def __del__(self):   #papild. objk. iznicinasana __del__
        print("Visu labu!")

