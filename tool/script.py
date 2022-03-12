import csv





def init():
    # setting parameters
    print("Setting parameters...")

def read(tot, pos):
    print("Reading output file")
    with open('cities.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
   
        next(spamreader)

        for row in spamreader:
            
            tot+=1
            print(' '.join(row))
            if row[-1].type == float and  float(row[-1]) > 125:
                pos+=1


def out(tot,pos):
    print("Total mold shots in data set: {} \n success rate: {} \n", tot,pos)
    
            



if __name__ == "__main__":
    tot = 0
    pos = 0

    read(tot,pos)

    out(tot,pos)
