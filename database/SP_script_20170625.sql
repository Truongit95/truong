USE [ObjectiveTest]
GO
/****** Object:  StoredProcedure [dbo].[CalculateUserSheet]    Script Date: 25-Jun-17 4:18:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[CalculateUserSheet]
	@questionSheetId BIGINT
AS
BEGIN
	DECLARE @mark INT, @numberOfCorrect INT, @total int

	UPDATE dbo.QuestionSheetDetails
	SET dbo.QuestionSheetDetails.Correct = dbo.Answers.Correct
	FROM dbo.QuestionSheetDetails JOIN dbo.Answers ON dbo.Answers.Id = dbo.QuestionSheetDetails.AnswerId
	WHERE QuestionSheetId = @questionSheetId 

	SET @total = (SELECT COUNT(*) FROM dbo.QuestionSheetDetails WHERE QuestionSheetId = @questionSheetId)
	SET @numberOfCorrect = (SELECT COUNT(*) FROM dbo.QuestionSheetDetails WHERE QuestionSheetId = @questionSheetId AND Correct = 1)
	SET @mark = ROUND(( @numberOfCorrect / ( @total * 1.0 / 10 ) ), 0)

	UPDATE dbo.QuestionSheets 
	SET Mark = @mark, Completed = 1
	WHERE Id = @questionSheetId
	
	SELECT @total AS Total, @numberOfCorrect AS  NumberOfCorrect, @mark AS Mark
END
GO
/****** Object:  StoredProcedure [dbo].[GenerateExam]    Script Date: 25-Jun-17 4:18:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[GenerateExam] 
	@number int, 
	@subjectId int
AS
BEGIN
	SELECT TOP (@number) Id FROM dbo.Questions WHERE SubjectId = @subjectId ORDER BY NEWID()
END
GO
