class NotesController < ApplicationController

  def list
    @notes = Note.all
  end
end
