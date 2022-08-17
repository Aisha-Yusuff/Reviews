require "school_report"


describe SchoolReport do 
  context "when given one grade" do
    it "returns the count for green grades" do 
      grades = SchoolReport.new("Green")
      expect(grades.report).to eq ("Green: 1")
    end 

    it "returns the count for red grades" do 
      grades = SchoolReport.new("Red")
      expect(grades.report).to eq ("Red: 1")
    end

    it "returns the count for amber grades" do 
      grades = SchoolReport.new("Amber")
      expect(grades.report).to eq ("Amber: 1")
    end
  end 

  context "When given more than one grade" do 
    it "return the count for green, red and amber grades" do 
      grades = SchoolReport.new("Green, Red, Amber")
      expect(grades.report).to eq ("Green: 1\nRed: 1\nAmber: 1")
    end 
  end
end 